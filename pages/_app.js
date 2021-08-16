import ContextProvider from "../src/store/ContextProvider";
import "../styles/globals.scss";
import AuthContextProvider from "../src/store/DetailsContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
