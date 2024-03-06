import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Input,
} from "@nextui-org/react";
import HeaderAuth from "./header-auth";

export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href={"/"} className="font-bold">
          Reddit Clone
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Input />
      </NavbarContent>
      <NavbarContent justify="end"> <HeaderAuth /> </NavbarContent>
    </Navbar>
  );
}
