import Head from "next/head";
import ContactPage from "../component/ContactPage";

export const metadata = {
  title: "Contact Us - BoloHi",
  description: "Contact Us if you have any questions or concerns.",
};

export default function ContactWrapper() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <ContactPage />
    </>
  );
}
