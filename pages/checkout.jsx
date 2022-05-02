const Checkout = () => {
    return (
        <>
            <section className="py-4 osahan-main-body">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="bg-white rounded shadow-sm overflow-hidden">
                                <div className="address p-3 bg-light">
                                    <h6 className="m-0 text-dark d-flex align-items-center">Address <span className="small ml-auto"><a
                                        href="checkout.html#" className="font-weight-bold text-decoration-none text-success"
                                        data-toggle="modal" data-target="#exampleModal"><i
                                            className="icofont-location-arrow"></i> Change</a></span></h6>
                                </div>
                                <div className="p-3">
                                    <div className="d-flex align-items-center">
                                        <p className="mb-2 font-weight-bold">Home</p>
                                        <p className="mb-2 badge badge-danger ml-auto">Default</p>
                                    </div>
                                    <p className="small text-muted m-0">1001 Veterans Blvd</p>
                                    <p className="small text-muted m-0">Redwood City, CA 94063</p>
                                </div>
                                <div className="address p-3 bg-light">
                                    <h6 className="m-0 text-dark">Payment Method</h6>
                                </div>
                                <div className="p-3">
                                    <a href="checkout.html#" className="text-success text-decoration-none w-100" data-toggle="modal"
                                        data-target="#paymentModal">
                                        <div className="d-flex align-items-center">
                                            <i className="icofont-credit-card"></i> <span className="ml-3">Edit Payment Method</span> <i
                                                className="icofont-rounded-right ml-auto"></i>
                                        </div>
                                    </a>
                                </div>
                                <div className="address p-3 bg-light">
                                    <h6 className="text-dark m-0">Promo Code</h6>
                                </div>
                                <div>
                                    <div className="accordion" id="accordionExample">
                                        <div className="d-flex align-items-center" id="headingThree">
                                            <a className="p-3 d-flex align-items-center text-decoration-none text-success w-100"
                                                type="button" data-toggle="collapse" data-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                <i className="icofont-badge mr-3"></i> Add Promo Code
                                                <i className="icofont-rounded-down ml-auto"></i>
                                            </a>
                                        </div>
                                        <div id="collapseThree" className="collapse p-3 border-top" aria-labelledby="headingThree"
                                            data-parent="#accordionExample">
                                            <div className="clearfix">
                                                <div className="input-group-sm mb-2 input-group">
                                                    <input placeholder="Enter promo code" type="text" className="form-control" />
                                                    <div className="input-group-append"><button id="button-addon2" type="button"
                                                        className="btn btn-success"><i className="icofont-percent"></i>
                                                        APPLY</button></div>
                                                </div>
                                                <div className="mb-0 input-group">
                                                    <div className="input-group-prepend"><span className="input-group-text"><i
                                                        className="icofont-ui-message"></i></span></div>
                                                    <textarea placeholder="Any suggestions? We will pass it on..."
                                                        aria-label="With textarea" className="form-control"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sticky_sidebar">
                                <div className="bg-white rounded overflow-hidden shadow-sm mb-3 checkout-sidebar">
                                    <div className="d-flex align-items-center osahan-cart-item-profile border-bottom bg-white p-3">
                                        <img alt="osahan" src="img/starter1.jpg" className="mr-3 rounded-circle img-fluid" />
                                        <div className="d-flex flex-column">
                                            <h6 className="mb-1 font-weight-bold">Osahan Fresh Store</h6>
                                            <p className="mb-0 small text-muted"><i className="feather-map-pin"></i> 2036 2ND AVE, NEW
                                                YORK, NY 10029</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="bg-white p-3 clearfix">
                                            <p className="font-weight-bold small mb-2">Bill Details</p>
                                            <p className="mb-1">Item Total <span className="small text-muted">(3 item)</span> <span
                                                className="float-right text-dark">$3140</span></p>
                                            <p className="mb-1">Store Charges <span className="float-right text-dark">$62.8</span></p>
                                            <p className="mb-3">Delivery Fee <span data-toggle="tooltip" data-placement="top"
                                                title="Delivery partner fee - $3" className="text-info ml-1"><i
                                                    className="icofont-info-circle"></i></span><span
                                                        className="float-right text-dark">$10</span></p>
                                            <h6 className="mb-0 text-success">Total Discount<span
                                                className="float-right text-success">$1884</span></h6>
                                        </div>
                                        <div className="p-3 border-top">
                                            <h5 className="mb-0">TO PAY <span className="float-right text-danger">$1329</span></h5>
                                        </div>
                                    </div>
                                </div>
                                <a href="successful.html" className="btn btn-success btn-lg btn-block mt-3 mb-3">Place Order</a>
                                <p className="text-success text-center">Your Total Savings on this order $8.52</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Delivery Address</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="">
                                <div className="form-row">
                                    <div className="col-md-12 form-group">
                                        <label className="form-label">Delivery Area</label>
                                        <div className="input-group">
                                            <input placeholder="Delivery Area" type="text" className="form-control" />
                                            <div className="input-group-append"><button id="button-addon2" type="button"
                                                className="btn btn-outline-secondary"><i className="icofont-pin"></i></button></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-group"><label className="form-label">Complete Address</label><input
                                        placeholder="Complete Address e.g. house number, street name, landmark" type="text"
                                        className="form-control" /></div>
                                    <div className="col-md-12 form-group"><label className="form-label">Delivery
                                        Instructions</label><input
                                            placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall" type="text"
                                            className="form-control" /></div>
                                    <div className="mb-0 col-md-12 form-group">
                                        <label className="form-label">Nickname</label>
                                        <div className="btn-group btn-group-toggle w-100" data-toggle="buttons">
                                            <label className="btn btn-outline-secondary active">
                                                <input type="radio" name="options" id="option1" checked /> Home
                                            </label>
                                            <label className="btn btn-outline-secondary">
                                                <input type="radio" name="options" id="option2" /> Work
                                            </label>
                                            <label className="btn btn-outline-secondary">
                                                <input type="radio" name="options" id="option3" /> Other
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer p-0 border-0">
                            <div className="col-6 m-0 p-0">
                                <button type="button" className="btn border-top btn-lg btn-block"
                                    data-dismiss="modal">Close</button>
                            </div>
                            <div className="col-6 m-0 p-0">
                                <button type="button" className="btn btn-success btn-lg btn-block">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Delivery Address</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="">
                                <div className="form-row">
                                    <div className="col-md-12 form-group">
                                        <label className="form-label">Delivery Area</label>
                                        <div className="input-group">
                                            <input placeholder="Delivery Area" type="text" className="form-control" />
                                            <div className="input-group-append"><button id="button-addon2" type="button"
                                                className="btn btn-outline-secondary"><i className="icofont-pin"></i></button></div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 form-group"><label className="form-label">Complete Address</label><input
                                        placeholder="Complete Address e.g. house number, street name, landmark" type="text"
                                        className="form-control" /></div>
                                    <div className="col-md-12 form-group"><label className="form-label">Delivery
                                        Instructions</label><input
                                            placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall" type="text"
                                            className="form-control" /></div>
                                    <div className="mb-0 col-md-12 form-group">
                                        <label className="form-label">Nickname</label>
                                        <div className="btn-group btn-group-toggle w-100" data-toggle="buttons">
                                            <label className="btn btn-outline-secondary active">
                                                <input type="radio" name="options" id="option1" checked /> Home
                                            </label>
                                            <label className="btn btn-outline-secondary">
                                                <input type="radio" name="options" id="option2" /> Work
                                            </label>
                                            <label className="btn btn-outline-secondary">
                                                <input type="radio" name="options" id="option3" /> Other
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer p-0 border-0">
                            <div className="col-6 m-0 p-0">
                                <button type="button" className="btn border-top btn-lg btn-block"
                                    data-dismiss="modal">Close</button>
                            </div>
                            <div className="col-6 m-0 p-0">
                                <button type="button" className="btn btn-success btn-lg btn-block">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Checkout;