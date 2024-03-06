'use client'
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import FormButton from "../common/formButton";
import { useFormState } from "react-dom";
import * as actions from "@/actions";

interface PostCreateFormProps{
    slug: string;
}

export default function CreatePostForm({ slug }: PostCreateFormProps) {
  const [formState, action] = useFormState(actions.createPost.bind(null, slug), { errors: {} });

  return (
    <div>
      <Popover placement="left">
        <PopoverTrigger>
          <Button color="primary"> Create a Post</Button>
        </PopoverTrigger>
        <PopoverContent>
          <form action={action} className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg"> Create a Post</h3>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Enter content"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />
            <div className="flex justify-center p-4">
            {formState.errors._form && <p className="text-red-200">{formState.errors._form}</p>}
              <FormButton> Submit </FormButton>{" "}
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
}
