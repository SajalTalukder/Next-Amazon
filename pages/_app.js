import ContextProvider from "../src/store/ContextProvider";
import "../styles/globals.scss";
import AuthContextProvider from "../src/store/DetailsContextProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ContextProvider>
        <Head>
          <title>Amazon | online shop</title>
          <meta
            name="description"
            content="NextJS Amazon E-commerce website build by sajal talukder"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </ContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
