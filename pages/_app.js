import Layout from "../Components/Layout";
import { SessionProvider } from "next-auth/react";
import store from "../context/store";
import { Provider } from 'react-redux';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}  refetchInterval={5 * 60}
    
    refetchOnWindowFocus={true}>   
    <Provider store={store}>   
        <Layout>
          <Component {...pageProps} />
        </Layout>  
    </Provider>
    </SessionProvider>
  );
}

