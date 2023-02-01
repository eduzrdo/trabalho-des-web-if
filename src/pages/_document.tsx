import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang="pt-br"
      className="scroll-smooth"
    >
      <Head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
        />
      </Head>
      <body className="text-zinc-800 bg-zinc-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
