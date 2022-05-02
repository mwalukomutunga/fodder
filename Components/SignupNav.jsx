import Link from "next/link";
const SignUpNav = () => {
    return (  
        <div className="col-lg-4">
        <div className="osahan-account bg-white rounded shadow-sm overflow-hidden">
           
            <div className="account-sections">
                <ul className="list-group">
                    {/* <Link href="signup" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex align-items-center p-3">
                            <i className="icofont-user osahan-icofont bg-danger"></i>Create Account
                            <span className="badge badge-success p-1 badge-pill ml-auto"><i
                                    className="icofont-simple-right"></i></span>
                        </li>
                    </Link> */}
                   
                    <Link href="/" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex align-items-center p-3">
                            <i className="icofont-address-book osahan-icofont bg-dark"></i>Go Home
                            <span className="badge badge-success p-1 badge-pill ml-auto"><i
                                    className="icofont-simple-right"></i></span>
                        </li>
                    </Link>
                    {/* <Link href="/conditions" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex align-items-center p-3">
                            <i className="icofont-info-circle osahan-icofont bg-primary"></i>Terms, Privacy &
                            Policy
                            <span className="badge badge-success p-1 badge-pill ml-auto"><i
                                    className="icofont-simple-right"></i></span>
                        </li>
                    </Link> */}
                    {/* <a href="help_support.html" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex align-items-center p-3">
                            <i className="icofont-phone osahan-icofont bg-warning"></i>Help & Support
                            <span className="badge badge-success p-1 badge-pill ml-auto"><i
                                    className="icofont-simple-right"></i></span>
                        </li>
                    </a> */}
                    {/* <Link href="/ticket" className="text-decoration-none text-dark">
                        <li className="border-bottom bg-white d-flex align-items-center p-3">
                            <i className="icofont-phone osahan-icofont bg-success"></i>Ticket
                            <span className="badge badge-success p-1 badge-pill ml-auto"><i
                                    className="icofont-simple-right"></i></span>
                        </li>
                    </Link> */}
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
 
export default SignUpNav;