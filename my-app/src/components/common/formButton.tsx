import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface FormButtonProps {
  children: React.ReactNode;
}

export default function FormButton({ children }: FormButtonProps) {
    const status = useFormStatus()
  return <Button type="submit" isLoading={status.pending}>{children}</Button>;
}
