import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import HeaderAuth from "./header-auth";
import parrot from "../../public/parrot.png";
import Image from "next/image";

export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href={"/"} className="font-bold">
          <Image alt="Logo" src={parrot.src} width={40} height={50} />
        </Link>
        <p className="font-bold text-inherit">Reddit</p>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Input />
      </NavbarContent>
      <NavbarContent justify="end">
        {" "}
        <HeaderAuth />{" "}
      </NavbarContent>
    </Navbar>
  );
}
