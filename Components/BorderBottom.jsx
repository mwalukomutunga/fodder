import Link from "next/link";

const Border = () => {
    return ( 
        <div className="border-bottom p-3 d-none mobile-nav">
        <div className="title d-flex align-items-center">
            <Link href ='/'>
            <a className="text-decoration-none text-dark d-flex align-items-center">
                <img className="osahan-logo mr-2" src="/img/FPSK LOGO.jpg"/>
                <h4 className="font-weight-bold text-success m-0">Grocery</h4>
            </a>
            </Link>
            <p className="ml-auto m-0">
                <Link  href="/">
                <a
                    className="text-decoration-none bg-white p-1 rounded shadow-sm d-flex align-items-center">
                    <i className="text-dark icofont-sale-discount"></i>
                    <span className="badge badge-danger p-1 ml-1 small">50%</span>
                </a>
                </Link>
            </p>
           <Link href="/">
           <a className="toggle ml-3" ><i className="icofont-navigation-menu"></i></a>
           </Link>
        </div>
        <Link href="/">
        <a  className="text-decoration-none">
            <div className="input-group mt-3 rounded shadow-sm overflow-hidden bg-white">
                <div className="input-group-prepend">
                    <button className="border-0 btn btn-outline-secondary text-success bg-white"><i
                            className="icofont-search"></i></button>
                </div>
                <input type="text" className="shadow-none border-0 form-control pl-0" placeholder="Search for Products.."
                    aria-label="" aria-describedby="basic-addon1"/>
            </div>
        </a>
        </Link>
    </div>
     );
}
 
export default Border;