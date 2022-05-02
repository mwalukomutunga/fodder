import AccountNav from "../Components/AccountNav";

const Terms = () => {
    return (   <section className="py-4 osahan-main-body">
    <div className="container">
        <div className="row">
           <AccountNav/>
            <div className="col-lg-8 p-4 bg-white rounded shadow-sm">
                <h4 className="mb-4 profile-title">Terms & Privacy</h4>
                <div className="help_support">
                    <div className="mb-1">
                        <a href="terms&amp;conditions.html" className="text-decoration-none"><button
                                className="p-3 btn-light border d-flex align-items-center btn w-100" type="button">
                                Terms & Conditions
                                <i className="text-success icofont-rounded-right ml-auto"></i>
                            </button></a>
                    </div>
                    <div className="mb-1">
                        <a href="privacy.html" className="text-decoration-none"><button
                                className="p-3 btn-light border d-flex align-items-center btn w-100" type="button">
                                Privacy
                                <i className="text-success icofont-rounded-right ml-auto"></i>
                            </button></a>
                    </div>
                    <div className="mb-1">
                        <a href="faq.html" className="text-decoration-none"><button
                                className="p-3 btn-light border d-flex align-items-center btn w-100" type="button">
                                FAQ
                                <i className="text-success icofont-rounded-right ml-auto"></i>
                            </button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
);
}
 
export default Terms;