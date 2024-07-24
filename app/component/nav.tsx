import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export function Nav() {
  return (
    <Navbar fluid rounded className="drop-shadow-md">
      <NavbarBrand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          BOLOHI
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
        <Link href="#" passHref legacyBehavior>
          <a className="navbar-link">Contact</a>
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
