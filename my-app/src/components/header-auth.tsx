"use client";
import {
  NavbarItem,
  Avatar,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import * as actions from "@/actions";

export default function HeaderAuth() {
  const session = useSession();

  if (session?.data?.user) {
    return (
      <>
        <NavbarItem>
          <Popover placement="right">
            <PopoverTrigger>
              <Button isIconOnly>
                <Avatar src={session?.data?.user?.image || ""} />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="p-4">
                <form action={actions.signOut}>
                  {" "}
                  <Button> Sign Out </Button>
                </form>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
      </>
    );
  } else {
    return (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
}
