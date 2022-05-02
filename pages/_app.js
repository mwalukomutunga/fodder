import Layout from '../Components/Layout'
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout> <Component {...pageProps} /></Layout>
    </SessionProvider>
  )
}

// function MyApp({ Component, pageProps }) {
//   return <Layout> <Component {...pageProps} /></Layout>
// }

// export default MyApp
