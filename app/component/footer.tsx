import React from "react";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

export function FooterCmp() {
  return (
    <Footer container>
      <div className="w-full text-center">
        {/* <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          />
          <FooterLinkGroup>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Licensing</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
          </FooterLinkGroup>
        </div> */}
        <FooterDivider />
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <span>
            © <b>BoloHi</b> 2024
          </span>
          <span>
            <b>Developed By : </b>
            <a
              href="https://heyasif.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mohd Asif
            </a>
          </span>
        </div>
      </div>
    </Footer>
  );
}
