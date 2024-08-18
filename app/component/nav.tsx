import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export function Nav() {
  return (
    <Navbar fluid rounded className="drop-shadow-md">
      <NavbarBrand href="/">
        <span className="flex items-center gap-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <Image
            src="/fav.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-primary text-2xl font-bold tracking-wide dark:text-white">
            BOLOHI
          </span>
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Link href="/bolohi/all" passHref legacyBehavior>
          <Button>Download</Button>
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Link href="/" passHref legacyBehavior>
          <a className="navbar-link">Home</a>
        </Link>
        <Link href="/bolohi/all" passHref legacyBehavior>
          <a className="navbar-link">All Version</a>
        </Link>
        {/* <Link href="#" passHref legacyBehavior>
          <a className="navbar-link">Services</a>
        </Link>
        <Link href="#" passHref legacyBehavior>
          <a className="navbar-link">Pricing</a>
        </Link> */}
        <Link href="/contact" passHref legacyBehavior>
          <a className="navbar-link">Contact</a>
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
