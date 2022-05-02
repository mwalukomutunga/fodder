const TopBar = () => {
    return ( 
        <div className="top-bar">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <ul className="l-top">
                        <li><a href="listing.html#"><i className="icofont-checked"></i> Fodder market</a></li>
                        <li><a href="listing.html#"><i className="icofont-checked"></i> Find Transport</a></li>
                        <li><a href="listing.html#"><i className="icofont-checked"></i> Trusted partners</a></li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <ul className="r-top">
                        <li><a href="listing.html#"><i className="icofont-headphone-alt"></i> Helpline : 0715454093</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default TopBar;