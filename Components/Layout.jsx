import Head from 'next/head'
import TopBar from '../Components/Tob_bar'
import Border from '../Components/BorderBottom'
import MainNav from '../Components/Main_Nav'
import Nav from '../Components/Nav'
import MainBody from '../Components/MainBody'
import Footer from '../Components/Footer'
import Login from '../Components/ModalLogin'
import FilterModel from '../Components/FilterModel'
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <title>Fodder trading platform | farmers</title>
        <link rel="stylesheet" type="text/css" href="vendor/slick/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="vendor/slick/slick-theme.min.css" />
        <link href="vendor/icons/icofont.min.css" rel="stylesheet" type="text/css" />
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="css/style.css" type="text/css" rel="stylesheet" />
        <link href="vendor/sidebar/demo.css" type="text/css" rel="stylesheet"></link>
      </Head>

      <main className="fixed-bottom-padding">
        <TopBar />
        <Border />
        <MainNav />
        {children}
        <Footer />        
      </main>
      <script src="vendor/jquery/jquery.min.js" type="text/javascript"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js" type="text/javascript"></script>
      <script type="text/javascript" src="vendor/slick/slick.min.js"></script>
      <script type="text/javascript" src="vendor/sidebar/hc-offcanvas-nav.js"></script>
      {/* <script src="js/osahan.js" type="text/javascript"></script> */}
      <script src="js/rocket-loader.min.js"></script>
      <script defer src="https://static.cloudflareinsights.com/beacon.min.js"
      ></script>
    </>
  )
}
