"use server";
import type { Topic } from "@prisma/client";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { db } from "@/db";
import { paths } from "@/paths";
import { revalidatePath } from "next/cache";

const createTopicSchema = z.object({
    name: z.string().min(3),
    description: z.string().min(10),
});

interface CreateTopicFormState {
    errors: {
        name?: string[];
        description?: string[];
        _form?: string[];
    }
}
export async function createTopic(formState: CreateTopicFormState, formData: FormData): Promise<CreateTopicFormState> {
    const session = await auth()
    const result = createTopicSchema.safeParse({
        name: formData.get("name"),
        description: formData.get("description"),
    });
    console.log(result)

    if (!session?.user) {
        return {
            errors: {
                _form: ['You have to be signed in to create a post']
            }
        }
    }

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors

        }
    }

    let topic: Topic;
    try {
        topic = await db.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description
            }
        })
    } catch (err: unknown) {
        if (err instanceof Error) {
            return {
                errors: {
                    _form: [err.message]
                }
            }
        } else {
            return {
                errors: { _form: ['Something went wrong'] }
            }
        }
    }
    revalidatePath('/')
    redirect(paths.topicShow(topic.slug))
}

