import Layout from "../Components/Layout";
import { SessionProvider } from "next-auth/react";
import store from "../context/store";
import { Provider } from 'react-redux';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
    <SessionProvider session={session}>   
        <Layout>
          <Component {...pageProps} />
        </Layout>    
    </SessionProvider>
    </Provider>
  );
}

