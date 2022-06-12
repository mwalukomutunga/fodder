import Layout from "../Components/Layout";
import { SessionProvider } from "next-auth/react";
import store from "../context/store";
import { Provider } from "react-redux";
import { useEffect } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // useEffect(() => {
  //   if (!window) return null;
  // }, []);
  return (
    <SessionProvider
      session={session}
      refetchInterval={6 * 60}
      refetchOnWindowFocus={true}
    >
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
