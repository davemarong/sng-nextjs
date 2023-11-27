import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <form
          name="contact"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/kontakt"
          hidden
        >
          <input type="text" name="fornavn" />
          <input type="text" name="etternavn" />
          <input type="text" name="bedrift" />
          <input type="email" name="email" />
          <textarea name="melding"></textarea>
        </form>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
