import Link from "next/link";

const Footer = () => {
  return (
    <footer className="section-footer border-top bg-white">
      <section className="footer-main border-top pt-5 pb-4">
        <div className="container">
          <div className="row">
            <aside className="col-md">
              <h6 className="title">Products</h6>
              <ul className="list-unstyled list-padding">
                <li>
                  <Link href="recommend">
                  <a  className="text-dark">
                    Recommended
                  </a></Link>
                </li>
                <li>
                  <Link href="popular">
                  <a  className="text-dark">
                    Most Popular
                  </a>
                  </Link>
                </li>
              </ul>
            </aside>
            <aside className="col-md">
              <h6 className="title">Checkout Process</h6>
              <ul className="list-unstyled list-padding">
                <li>
                 <Link href="cart">
                 <a  className="text-dark">
                    Cart
                  </a></Link>
                </li>
               
                <li>
                 <Link href="checkout">
                 <a  className="text-dark">
                    Checkout
                  </a></Link>
                </li>
                {/* <li> <a href="successful.html" className="text-dark">Successful</a></li> */}
              </ul>
            </aside>
            <aside className="col-md">
              <h6 className="title">My Order</h6>
              <ul className="list-unstyled list-padding">
                <li>
                  {" "}
                  <a href="my_order.html" className="text-dark">
                    My order
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="status_canceled.html" className="text-dark">
                    Status Canceled
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="status_complete.html" className="text-dark">
                    Status Complete
                  </a>
                </li>
                {/* <li> <a href="status_complete.html" className="text-dark">Status Complete</a></li>
                            <li> <a href="status_onprocess.html" className="text-dark">Status on Process</a></li>
                            <li> <a href="status_canceled.html" className="text-dark">Status Canceled</a></li> */}
                {/* <li> <a href="review.html" className="text-dark">Review</a></li> */}
              </ul>
            </aside>
            <aside className="col-md">
              <h6 className="title">My Account</h6>
              <ul className="list-unstyled list-padding">
                <li>
                  {" "}
                  <a className="text-dark" href="my_account.html">
                    {" "}
                    My account
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="text-dark" href="terms_conditions.html">
                    {" "}
                    Terms &amp; conditions
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="text-dark" href="help_support.html">
                    {" "}
                    Help &amp; support
                  </a>
                </li>
                <li>
                  {" "}
                  <a className="text-dark" href="signin.html">
                    {" "}
                    Logout
                  </a>
                </li>
              </ul>
            </aside>
            <aside className="col-md">
              <h6 className="title">Extra Pages</h6>
              <ul className="list-unstyled list-padding">
                <li>
                  <a href="terms_conditions.html" className="text-dark">
                    {" "}
                    Conditions{" "}
                  </a>
                </li>
                <li>
                  <a href="help_support.html" className="text-dark">
                    {" "}
                    Help Support{" "}
                  </a>
                </li>
                <li>
                  <a href="refund_payment.html" className="text-dark">
                    {" "}
                    Refund Payment{" "}
                  </a>
                </li>
                <li>
                  <a href="faq.html" className="text-dark">
                    {" "}
                    FAQ{" "}
                  </a>
                </li>
                {/* <li><a href="signin.html" className="text-dark"> Sign In </a></li> */}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="footer-bottom border-top py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="pr-2">© 2021 Fodder Market</span>
              <span className="pr-2">
                <Link href="privacy">
                <a className="text-dark">
                  Privacy
                </a></Link>
              </span>
              <span className="pr-2">
               <Link href="terms">
               <a  className="text-dark">
                  Terms & Conditions
                </a>
               </Link>
              </span>
            </div>
            
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
