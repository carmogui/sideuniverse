import Head from "next/head";
import "../styles/global.css";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>sideuniverse</title>
      </Head>

      <Component {...pageProps} />

      <Analytics />
    </>
  );
}
