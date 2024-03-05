import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Avatar,
  Button,
} from "@nextui-org/react";
import { auth } from "@/auth";

export default async function Header() {
  const session = await auth();

  let authContent: React.ReactNode;
  if (session?.user) {
    authContent = <Avatar src={session?.user?.image || ""} />;
  } else {
    authContent = (
      <>
        {" "}
        <NavbarItem>
          {" "}
          <Button type="submit" color="secondary" variant="bordered">
            {" "}
            Sign In{" "}
          </Button>
        </NavbarItem>
        <NavbarItem>
          {" "}
          <Button type="submit" color="primary" variant="flat">
            {" "}
            Sign Up{" "}
          </Button>{" "}
        </NavbarItem>
      </>
    );
  }

  return (
    <Navbar>
      <NavbarBrand>
        <Link href={"/"} className="font-bold">
          {" "}
          Reddit Clone{" "}
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <Input />
      </NavbarContent>
      <NavbarContent>{authContent}</NavbarContent>
    </Navbar>
  );
}
