import type { AppProps } from "next/app";
import "../public/global.css";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Test UI</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App;