import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <body  className="dx-viewport fixed-bottom-padding">
          <Main />
          <NextScript />
          <script 
            src="/vendor/jquery/jquery.min.js"
            type="text/javascript"
          ></script>
          <script async
            src="/vendor/bootstrap/js/bootstrap.bundle.min.js"
            type="text/javascript"
          ></script>
          <script async
            type="text/javascript"
            src="/vendor/slick/slick.min.js"
          ></script>
          <script async
            type="text/javascript"
            src="/vendor/sidebar/hc-offcanvas-nav.js"
          ></script>
          <script async src="/js/osahan.js" type="text/javascript"></script>

          <script async src="/js/rocket-loader.min.js"></script>
          <script
            async
            src="https://static.cloudflareinsights.com/beacon.min.js"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
