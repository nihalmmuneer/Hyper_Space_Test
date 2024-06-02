import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/hyper_icon.jpg" />
        <title>HyperSpace</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
