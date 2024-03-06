'use client';

import {
   Input,
   Button,
   Textarea,
   Popover,
   PopoverContent,
   PopoverTrigger
} from "@nextui-org/react"
import * as actions from "@/actions"
import { useFormState } from "react-dom"
import FormButton from "../common/formButton";

export default function TopicCreateForm(){
    const [formState, action] = useFormState(actions.createTopic, {errors: {}})
return(
    <Popover>
        <PopoverTrigger>
            <Button color="primary"> Create a Topic</Button>
        </PopoverTrigger>
        <PopoverContent>
            <form action={action}>
                <div className="flex flex-col gap-4 p-4 w-80">
                    <h3 className="text-lg"> Create a Topic</h3>
                    <Input name="name" label="Name" labelPlacement="outside" isInvalid={!!formState.errors.name} errorMessage={formState.errors.name?.join(", ")}/>
                    <Textarea name="description" label="Description" labelPlacement="outside" placeholder="Describe your topic" isInvalid={!!formState.errors.description} errorMessage={formState.errors.description} />
                </div>
                <div className="flex justify-center p-4">
                    {formState.errors._form && <p className="text-red-200">{formState.errors._form}</p>}
                    <FormButton> Submit </FormButton>
                </div>
                
            </form>
        </PopoverContent>
    </Popover>
)
}