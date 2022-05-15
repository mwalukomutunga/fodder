import Head from 'next/head'
import TopBar from '../Components/Tob_bar'
import Border from '../Components/BorderBottom'
import MainNav from '../Components/Main_Nav'
import Nav from '../Components/Nav'
import MainBody from '../Components/MainBody'
import Footer from '../Components/Footer'
import Login from '../Components/ModalLogin'
import FilterModel from '../Components/FilterModel'
import Script from 'next/script'
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <title>Fodder trading platform | farmers</title>
        <link rel="stylesheet" type="text/css" href="/vendor/slick/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="/vendor/slick/slick-theme.min.css" />
        <link href="/vendor/icons/icofont.min.css" rel="stylesheet" type="text/css" />
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="/css/style.css" type="text/css" rel="stylesheet" />
        {/* <link href="/vendor/sidebar/demo.css" type="text/css" rel="stylesheet"></link> */}
      </Head>
      {/* <Script 
            src="/vendor/jquery/jquery.min.js"
            type="text/javascript"
          ></Script>

<Script 
            src="/vendor/bootstrap/js/bootstrap.bundle.min.js"
            type="text/javascript"
          ></Script>
          <Script 
            type="text/javascript"
            src="/vendor/slick/slick.min.js"
          ></Script>
          <Script 
            type="text/javascript"
            src="/vendor/sidebar/hc-offcanvas-nav.js"
          ></Script>
          <Script  src="/js/osahan.js" type="text/javascript"></Script>

          <Script  src="/js/rocket-loader.min.js"></Script>
          <Script
            
            src="https://static.cloudflareinsights.com/beacon.min.js"
          ></Script> */}
      

        <TopBar />
        <Border />
        <MainNav />
        {children}
        <Footer />      
     
      
    </>
  )
}
