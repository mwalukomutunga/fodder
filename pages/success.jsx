import Link from "next/link";
import { useSession,signIn } from "next-auth/react";


const Success = () => {
    const { data: session, status } = useSession();
    const loading = status === "loading";
    
  if (typeof window !== "undefined" && loading) return null;
  if (!session) {
  signIn();
}

    return ( 

        <>
         <nav aria-label="breadcrumb" className="breadcrumb mb-0">
      <div className="container">
        <ol className="d-flex align-items-center mb-0 p-0">
          <li className="breadcrumb-item">
            <a href="successful.html#" className="text-success">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Successful</li>
        </ol>
      </div>
    </nav>

    <div className="row d-flex justify-content-center">
      <div className="col-md-6">
        <div className="p-5 text-center">
          <i className="icofont-check-circled display-1 text-warning"></i>
          <h1 className="font-weight-bold" style={{color:'#ffc107!important'}}>
            {session?.user.name}, Your order has been placed 🎉
          </h1>
          {/* <p className="text-white">
            Check your order status in
            <a
              href="complete_order.html"
              className="font-weight-bold text-decoration-none text-white"
              >My Order</a
            >
            about next steps information.
          </p> */}
        </div>

        <div className="bg-white rounded p-3 m-5 text-center">
        <h6 className="font-weight-bold mb-2">Make payments to complete the order.</h6>
          {/* <h6 className="font-weight-bold mb-2">Preparing your order, we will be in touch</h6> */}
          {/* <p className="small text-muted">
            Your order will be prepared and will come soon
          </p> */}
         <Link  href="/">
         <a           
            className="btn rounded btn-warning btn-lg btn-block"
            >Continue Shopping</a>
         </Link>
        </div>
      </div>
    </div></>
     );
}
 
export default Success;