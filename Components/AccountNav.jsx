import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const AccountNav = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";


//   useEffect(() => {
    
// }, [session]);
// When rendering client side don't display anything until loading is complete

    return (  
        <div className="col-lg-4">
        <div className="osahan-account bg-white rounded shadow-sm overflow-hidden">
            <div className="p-4 profile text-center border-bottom">
                <img src="/img/user.png" className="img-fluid rounded-pill"/>
                <h6 className="font-weight-bold m-0 mt-2">{session?.user.name}</h6>
                {/* <p className="small text-muted m-0"><a
                        className="__cf_email__"
                        data-cfemail="5e373f33312d3f363f301e39333f3732703d3133">[email&#160;protected]</a>
                </p> */}
            </div>
            <div className="account-sections">
                <ul className="list-group">
                    <Link href="account" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex align-items-center p-3">
                            <i className="icofont-user osahan-icofont bg-danger"></i>My Account
                            <span className="badge badge-success p-1 badge-pill ml-auto"><i
                                    className="icofont-simple-right"></i></span>
                        </li>
                    </Link>
                    <Link href="listing" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex align-items-center p-3">
                            <i className="icofont-user osahan-icofont bg-danger"></i>My Listing
                            <span className="badge badge-success p-1 badge-pill ml-auto"><i
                                    className="icofont-simple-right"></i></span>
                        </li>
                    </Link>
                    <Link href="post" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex align-items-center p-3">
                            <i className="icofont-user osahan-icofont bg-danger"></i>Upload Fodder
                            <span className="badge badge-success p-1 badge-pill ml-auto"><i
                                    className="icofont-simple-right"></i></span>
                        </li>
                    </Link>
                    <Link href="myorders" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex align-items-center p-3">
                            <i className="icofont-user osahan-icofont bg-danger"></i>My Orders
                            <span className="badge badge-success p-1 badge-pill ml-auto"><i
                                    className="icofont-simple-right"></i></span>
                        </li>
                    </Link>
                    {/* <Link href="myorders" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex align-items-center p-3">
                            <i className="icofont-user osahan-icofont bg-danger"></i>My Orders
                            <span className="badge badge-success p-1 badge-pill ml-auto"><i
                                    className="icofont-simple-right"></i></span>
                        </li>
                    </Link> */}
                    {/* <a href="promos.html" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex align-items-center p-3">
                            <i className="icofont-sale-discount osahan-icofont bg-success"></i>Promos
                            <span className="badge badge-success p-1 badge-pill ml-auto"><i
                                    className="icofont-simple-right"></i></span>
                        </li>
                    </a> */}
                    <Link href="/address" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex align-items-center p-3">
                            <i className="icofont-address-book osahan-icofont bg-dark"></i>My Address
                            <span className="badge badge-success p-1 badge-pill ml-auto"><i
                                    className="icofont-simple-right"></i></span>
                        </li>
                    </Link>
                    <Link href="/conditions" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex align-items-center p-3">
                            <i className="icofont-info-circle osahan-icofont bg-primary"></i>Terms, Privacy &
                            Policy
                            <span className="badge badge-success p-1 badge-pill ml-auto"><i
                                    className="icofont-simple-right"></i></span>
                        </li>
                    </Link>
                    {/* <a href="help_support.html" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex align-items-center p-3">
                            <i className="icofont-phone osahan-icofont bg-warning"></i>Help & Support
                            <span className="badge badge-success p-1 badge-pill ml-auto"><i
                                    className="icofont-simple-right"></i></span>
                        </li>
                    </a> */}
                    <Link href="/ticket" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex align-items-center p-3">
                            <i className="icofont-phone osahan-icofont bg-success"></i>Ticket
                            <span className="badge badge-success p-1 badge-pill ml-auto"><i
                                    className="icofont-simple-right"></i></span>
                        </li>
                    </Link>
                    {/* <a href="signin.html" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex  align-items-center p-3">
                            <i className="icofont-lock osahan-icofont bg-danger"></i> Logout
                        </li>
                    </a> */}
                </ul>
            </div>
        </div>
    </div>
    );
}
 
export default AccountNav;