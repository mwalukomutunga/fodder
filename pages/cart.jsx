const Cart = () => {
    return ( 
        <>
         <section className="py-4 osahan-main-body">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="accordion" id="accordionExample">

                        <div className="card border-0 osahan-accor rounded shadow-sm overflow-hidden">

                            <div className="card-header bg-white border-0 p-0" id="headingOne">
                                <h2 className="mb-0">
                                    <button
                                        className="btn d-flex align-items-center bg-white btn-block text-left btn-lg h5 px-3 py-4 m-0"
                                        type="button" data-toggle="collapse" data-target="#collapseOne"
                                        aria-expanded="true" aria-controls="collapseOne">
                                        <span className="c-number">1</span> Cart (3 items)
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                data-parent="#accordionExample">
                                <div className="card-body p-0 border-top">
                                    <div className="osahan-cart">
                                        <div className="cart-items bg-white position-relative border-bottom">
                                            <a href="product_details.html" className="position-absolute">
                                                <span className="badge badge-danger m-3">10%</span>
                                            </a>
                                            <div className="d-flex  align-items-center p-3">
                                                <a href="product_details.html"><img src="img/cart/g1.png"
                                                        className="img-fluid"/></a>
                                                <a href="product_details.html"
                                                    className="ml-3 text-dark text-decoration-none w-100">
                                                    <h5 className="mb-1">Bread</h5>
                                                    <p className="text-muted mb-2"><del
                                                            className="text-success mr-1">$1.20kg</del> $0.98/kg</p>
                                                    <div className="d-flex align-items-center">
                                                        <p className="total_price font-weight-bold m-0">$2.82</p>
                                                        <form id='myform' className="cart-items-number d-flex ml-auto"
                                                            method='POST' action='cart.html#'>
                                                            <input type='button' value='-'
                                                                className='qtyminus btn btn-success btn-sm'
                                                                field='quantity' />
                                                            <input type='text' name='quantity' value='1'
                                                                className='qty form-control' />
                                                            <input type='button' value='+'
                                                                className='qtyplus btn btn-success btn-sm'
                                                                field='quantity' />
                                                        </form>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="cart-items bg-white position-relative border-bottom">
                                            <div className="d-flex  align-items-center p-3">
                                                <a href="product_details.html"><img src="img/cart/g2.png"
                                                        className="img-fluid"/></a>
                                                <a href="product_details.html"
                                                    className="ml-3 text-dark text-decoration-none w-100">
                                                    <h5 className="mb-1">Spinach</h5>
                                                    <p className="text-muted mb-2"><del
                                                            className="text-success mr-1">$1.20kg</del> $0.98/kg</p>
                                                    <div className="d-flex align-items-center">
                                                        <p className="total_price font-weight-bold m-0">$3.82</p>
                                                        <form id='myform' className="cart-items-number d-flex ml-auto"
                                                            method='POST' action='cart.html#'>
                                                            <input type='button' value='-'
                                                                className='qtyminus btn btn-success btn-sm'
                                                                field='quantity' />
                                                            <input type='text' name='quantity' value='1'
                                                                className='qty form-control' />
                                                            <input type='button' value='+'
                                                                className='qtyplus btn btn-success btn-sm'
                                                                field='quantity' />
                                                        </form>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="cart-items bg-white position-relative border-bottom">
                                            <div className="d-flex  align-items-center p-3">
                                                <a href="product_details.html"><img src="img/cart/g3.png"
                                                        className="img-fluid"/></a>
                                                <a href="product_details.html"
                                                    className="ml-3 text-dark text-decoration-none w-100">
                                                    <h5 className="mb-1">Chilli</h5>
                                                    <p className="text-muted mb-2"><del
                                                            className="text-success mr-1">$1.20kg</del> $0.98/kg</p>
                                                    <div className="d-flex align-items-center">
                                                        <p className="total_price font-weight-bold m-0">$2.82</p>
                                                        <form id='myform' className="cart-items-number d-flex ml-auto"
                                                            method='POST' action='cart.html#'>
                                                            <input type='button' value='-'
                                                                className='qtyminus btn btn-success btn-sm'
                                                                field='quantity' />
                                                            <input type='text' name='quantity' value='1'
                                                                className='qty form-control' />
                                                            <input type='button' value='+'
                                                                className='qtyplus btn btn-success btn-sm'
                                                                field='quantity' />
                                                        </form>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="cart.html#" className="text-decoration-none btn btn-block p-3"
                                                type="button" data-toggle="collapse" data-target="#collapsetwo"
                                                aria-expanded="true" aria-controls="collapsetwo">
                                                <div
                                                    className="rounded shadow bg-success d-flex align-items-center p-3 text-white">
                                                    <div className="more">
                                                        <h6 className="m-0">Subtotal $8.52</h6>
                                                        <p className="small m-0">Proceed to checkout</p>
                                                    </div>
                                                    <div className="ml-auto"><i className="icofont-simple-right"></i></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card border-0 osahan-accor rounded shadow-sm overflow-hidden mt-3">

                            <div className="card-header bg-white border-0 p-0" id="headingtwo">
                                <h2 className="mb-0">
                                    <button
                                        className="btn d-flex align-items-center bg-white btn-block text-left btn-lg h5 px-3 py-4 m-0"
                                        type="button" data-toggle="collapse" data-target="#collapsetwo"
                                        aria-expanded="true" aria-controls="collapsetwo">
                                        <span className="c-number">2</span> Order Address <a href="cart.html#"
                                            data-toggle="modal" data-target="#exampleModal"
                                            className="text-decoration-none text-success ml-auto"> <i
                                                className="icofont-plus-circle mr-1"></i>Add New Delivery Address</a>
                                    </button>
                                </h2>
                            </div>

                            <div id="collapsetwo" className="collapse" aria-labelledby="headingtwo"
                                data-parent="#accordionExample">
                                <div className="card-body p-0 border-top">
                                    <div className="osahan-order_address">
                                        <div className="p-3 row">
                                            <div
                                                className="custom-control col-lg-6 custom-radio mb-3 position-relative border-custom-radio">
                                                <input type="radio" id="customRadioInline1" name="customRadioInline1"
                                                    className="custom-control-input" checked/>
                                                <label className="custom-control-label w-100" for="customRadioInline1">
                                                    <div>
                                                        <div className="p-3 bg-white rounded shadow-sm w-100">
                                                            <div className="d-flex align-items-center mb-2">
                                                                <p className="mb-0 h6">Home</p>
                                                                <p className="mb-0 badge badge-success ml-auto"><i
                                                                        className="icofont-check-circled"></i> Default</p>
                                                            </div>
                                                            <p className="small text-muted m-0">1001 Veterans Blvd</p>
                                                            <p className="small text-muted m-0">Redwood City, CA 94063</p>
                                                            <p className="pt-2 m-0 text-right"><span className="small"><a
                                                                        href="cart.html#" data-toggle="modal"
                                                                        data-target="#exampleModal"
                                                                        className="text-decoration-none text-info">Edit</a></span>
                                                            </p>
                                                        </div>
                                                        <span className="btn btn-light border-top btn-lg btn-block">
                                                            Deliver Here
                                                        </span>
                                                    </div>
                                                </label>
                                            </div>
                                            <div
                                                className="custom-control col-lg-6 custom-radio position-relative border-custom-radio">
                                                <input type="radio" id="customRadioInline2" name="customRadioInline1"
                                                    className="custom-control-input"/>
                                                <label className="custom-control-label w-100" for="customRadioInline2">
                                                    <div>
                                                        <div className="p-3 rounded bg-white shadow-sm w-100">
                                                            <div className="d-flex align-items-center mb-2">
                                                                <p className="mb-0 h6">Work</p>
                                                                <p className="mb-0 badge badge-light ml-auto"><i
                                                                        className="icofont-check-circled"></i> Select</p>
                                                            </div>
                                                            <p className="small text-muted m-0">Model Town, Ludhiana</p>
                                                            <p className="small text-muted m-0">Punjab 141002, India</p>
                                                            <p className="pt-2 m-0 text-right"><span className="small"><a
                                                                        href="cart.html#" data-toggle="modal"
                                                                        data-target="#exampleModal"
                                                                        className="text-decoration-none text-info">Edit</a></span>
                                                            </p>
                                                        </div>
                                                        <span className="btn btn-light border-top btn-lg btn-block">
                                                            Deliver Here
                                                        </span>
                                                    </div>
                                                </label>
                                            </div>
                                            <a href="cart.html#" className="btn btn-success btn-lg btn-block mt-3"
                                                type="button" data-toggle="collapse" data-target="#collapsethree"
                                                aria-expanded="true" aria-controls="collapsethree">Continue</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card border-0 osahan-accor rounded shadow-sm overflow-hidden mt-3">

                            <div className="card-header bg-white border-0 p-0" id="headingthree">
                                <h2 className="mb-0">
                                    <button
                                        className="btn d-flex align-items-center bg-white btn-block text-left btn-lg h5 px-3 py-4 m-0"
                                        type="button" data-toggle="collapse" data-target="#collapsethree"
                                        aria-expanded="true" aria-controls="collapsethree">
                                        <span className="c-number">3</span> Delivery Time
                                    </button>
                                </h2>
                            </div>

                            <div id="collapsethree" className="collapse" aria-labelledby="headingthree"
                                data-parent="#accordionExample">
                                <div className="card-body p-0 border-top">
                                    <div className="osahan-order_address">
                                        <div className="text-center mb-4 py-4">
                                            <p className="display-2"><i className="icofont-ui-calendar text-success"></i></p>
                                            <p className="mb-1">Your Current Slot:</p>
                                            <h6 className="font-weight-bold text-dark">Tommorow, 6AM - 10AM</h6>
                                        </div>
                                        <div className="schedule">
                                            <ul className="nav nav-tabs justify-content-center nav-fill" id="myTab"
                                                role="tablist">
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link active text-dark" id="mon-tab" data-toggle="tab"
                                                        href="cart.html#mon" role="tab" aria-controls="mon"
                                                        aria-selected="true">
                                                        <p className="mb-0 font-weight-bold">MON</p>
                                                        <p className="mb-0">7 Sep</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link text-dark" id="tue-tab" data-toggle="tab"
                                                        href="cart.html#tue" role="tab" aria-controls="tue"
                                                        aria-selected="false">
                                                        <p className="mb-0 font-weight-bold">TUE</p>
                                                        <p className="mb-0">8 Sep</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link text-dark" id="wed-tab" data-toggle="tab"
                                                        href="cart.html#wed" role="tab" aria-controls="wed"
                                                        aria-selected="false">
                                                        <p className="mb-0 font-weight-bold">WED</p>
                                                        <p className="mb-0">9 Sep</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link text-dark" id="thu-tab" data-toggle="tab"
                                                        href="cart.html#thu" role="tab" aria-controls="thu"
                                                        aria-selected="false">
                                                        <p className="mb-0 font-weight-bold">THU</p>
                                                        <p className="mb-0">10 Sep</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link text-dark" id="fri-tab" data-toggle="tab"
                                                        href="cart.html#fri" role="tab" aria-controls="fri"
                                                        aria-selected="false">
                                                        <p className="mb-0 font-weight-bold">FRI</p>
                                                        <p className="mb-0">11 Sep</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <a className="nav-link text-dark" id="sat-tab" data-toggle="tab"
                                                        href="cart.html#sat" role="tab" aria-controls="sat"
                                                        aria-selected="false">
                                                        <p className="mb-0 font-weight-bold">SAT</p>
                                                        <p className="mb-0">12 Sep</p>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="tab-content filter bg-white" id="myTabContent">
                                                <div className="tab-pane fade show active" id="mon" role="tabpanel"
                                                    aria-labelledby="mon-tab">
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="mon1" value="mon1" checked/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="mon1">
                                                            <i className="icofont-clock-time mr-2"></i> 6AM - 10AM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="mon2" value="mon2"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="mon2">
                                                            <i className="icofont-clock-time mr-2"></i> 4PM - 6AM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="mon3" value="mon3"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="mon3">
                                                            <i className="icofont-clock-time mr-2"></i> 6PM - 9PM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="mon4" value="mon4"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="mon4">
                                                            <i className="icofont-clock-time mr-2"></i> 10AM - 1PM
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="tue" role="tabpanel"
                                                    aria-labelledby="tue-tab">
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="tue1" value="tue1" checked/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="tue1">
                                                            <i className="icofont-clock-time mr-2"></i> 6AM - 10AM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="tue2" value="tue2"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="tue2">
                                                            <i className="icofont-clock-time mr-2"></i> 4PM - 6AM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="tue3" value="tue3"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="tue3">
                                                            <i className="icofont-clock-time mr-2"></i> 6PM - 9PM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="tue4" value="tue4"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="tue4">
                                                            <i className="icofont-clock-time mr-2"></i> 10AM - 1PM
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="wed" role="tabpanel"
                                                    aria-labelledby="wed-tab">
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="wed1" value="wed1" checked/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="wed1">
                                                            <i className="icofont-clock-time mr-2"></i> 6AM - 10AM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="wed2" value="wed2"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="wed2">
                                                            <i className="icofont-clock-time mr-2"></i> 4PM - 6AM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="wed3" value="wed3"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="wed3">
                                                            <i className="icofont-clock-time mr-2"></i> 6PM - 9PM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="wed4" value="wed4"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="wed4">
                                                            <i className="icofont-clock-time mr-2"></i> 10AM - 1PM
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="thu" role="tabpanel"
                                                    aria-labelledby="thu-tab">
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="thu1" value="thu1" checked/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="thu1">
                                                            <i className="icofont-clock-time mr-2"></i> 6AM - 10AM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="thu2" value="thu2"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="thu2">
                                                            <i className="icofont-clock-time mr-2"></i> 4PM - 6AM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="thu3" value="thu3"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="thu3">
                                                            <i className="icofont-clock-time mr-2"></i> 6PM - 9PM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="thu4" value="thu4"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="thu4">
                                                            <i className="icofont-clock-time mr-2"></i> 10AM - 1PM
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="fre" role="tabpanel"
                                                    aria-labelledby="fre-tab">
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="fri1" value="fri1" checked/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="fri1">
                                                            <i className="icofont-clock-time mr-2"></i> 6AM - 10AM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="fri2" value="fri2"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="fri2">
                                                            <i className="icofont-clock-time mr-2"></i> 4PM - 6AM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="fri3" value="fri3"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="fri3">
                                                            <i className="icofont-clock-time mr-2"></i> 6PM - 9PM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="fri4" value="fri4"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="fri4">
                                                            <i className="icofont-clock-time mr-2"></i> 10AM - 1PM
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="sat" role="tabpanel"
                                                    aria-labelledby="sat-tab">
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="sat1" value="sat1" checked/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="sat1">
                                                            <i className="icofont-clock-time mr-2"></i> 6AM - 10AM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="sat2" value="sat2"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="sat2">
                                                            <i className="icofont-clock-time mr-2"></i> 4PM - 6AM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="sat3" value="sat3"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="sat3">
                                                            <i className="icofont-clock-time mr-2"></i> 6PM - 9PM
                                                        </label>
                                                    </div>
                                                    <div className="custom-control border-bottom px-0 custom-radio">
                                                        <input className="custom-control-input" type="radio"
                                                            name="exampleRadios" id="sat4" value="sat4"/>
                                                        <label className="custom-control-label py-3 w-100 px-3" for="sat4">
                                                            <i className="icofont-clock-time mr-2"></i> 10AM - 1PM
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <a href="cart.html#" className="btn btn-success btn-lg btn-block" type="button"
                                            data-toggle="collapse" data-target="#collapsefour" aria-expanded="true"
                                            aria-controls="collapsefour">Schedule Order</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card border-0 osahan-accor rounded shadow-sm overflow-hidden mt-3">

                            <div className="card-header bg-white border-0 p-0" id="headingfour">
                                <h2 className="mb-0">
                                    <button
                                        className="btn d-flex align-items-center bg-white btn-block text-left btn-lg h5 px-3 py-4 m-0"
                                        type="button" data-toggle="collapse" data-target="#collapsefour"
                                        aria-expanded="true" aria-controls="collapsefour">
                                        <span className="c-number">4</span> Payment
                                    </button>
                                </h2>
                            </div>

                            <div id="collapsefour" className="collapse" aria-labelledby="headingfour"
                                data-parent="#accordionExample">
                                <div className="card-body px-3 pb-3 pt-1 border-top">
                                    <div className="schedule">
                                        <ul className="nav nav-tabs justify-content-center nav-fill" id="myTab"
                                            role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link active text-dark" id="credit-tab" data-toggle="tab"
                                                    href="cart.html#credit" role="tab" aria-controls="credit"
                                                    aria-selected="true">
                                                    <p className="mb-0 font-weight-bold"><i
                                                            className="icofont-credit-card mr-2"></i> Credit/Debit Card</p>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link text-dark" id="banking-tab" data-toggle="tab"
                                                    href="cart.html#banking" role="tab" aria-controls="banking"
                                                    aria-selected="false">
                                                    <p className="mb-0 font-weight-bold"><i className="icofont-globe mr-2"></i>
                                                        Net Banking</p>
                                                </a>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link text-dark" id="cash-tab" data-toggle="tab"
                                                    href="cart.html#cash" role="tab" aria-controls="cash"
                                                    aria-selected="false">
                                                    <p className="mb-0 font-weight-bold"><i className="icofont-dollar mr-2"></i>
                                                        Cash on Delivery</p>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content bg-white" id="myTabContent">
                                            <div className="tab-pane fade show active" id="credit" role="tabpanel"
                                                aria-labelledby="credit-tab">
                                                <div className="osahan-card-body pt-3">
                                                    <h6 className="m-0">Add new card</h6>
                                                    <p className="small">WE ACCEPT <span
                                                            className="osahan-card ml-2 font-weight-bold">( Master Card /
                                                            Visa Card / Rupay )</span></p>
                                                    <form>
                                                        <div className="form-row">
                                                            <div className="col-md-12 form-group">
                                                                <label className="form-label font-weight-bold small">Card
                                                                    number</label>
                                                                <div className="input-group">
                                                                    <input placeholder="Card number" type="number"
                                                                        className="form-control"/>
                                                                    <div className="input-group-append"><button
                                                                            id="button-addon2" type="button"
                                                                            className="btn btn-outline-secondary"><i
                                                                                className="icofont-credit-card"></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8 form-group"><label
                                                                    className="form-label font-weight-bold small">Valid
                                                                    through(MM/YY)</label><input
                                                                    placeholder="Enter Valid through(MM/YY)"
                                                                    type="number" className="form-control"/></div>
                                                            <div className="col-md-4 form-group"><label
                                                                    className="form-label font-weight-bold small">CVV</label><input
                                                                    placeholder="Enter CVV Number" type="number"
                                                                    className="form-control"/></div>
                                                            <div className="col-md-12 form-group"><label
                                                                    className="form-label font-weight-bold small">Name on
                                                                    card</label><input placeholder="Enter Card number"
                                                                    type="text" className="form-control"/></div>
                                                            <div className="col-md-12 form-group">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" id="custom-checkbox1"
                                                                        className="custom-control-input"/>
                                                                    <label title="" type="checkbox"
                                                                        for="custom-checkbox1"
                                                                        className="custom-control-label small pt-1">Securely
                                                                        save this card for a faster checkout next
                                                                        time.</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="banking" role="tabpanel"
                                                aria-labelledby="banking-tab">
                                                <div className="osahan-card-body pt-3">
                                                    <form>
                                                        <div className="btn-group btn-group-toggle w-100"
                                                            data-toggle="buttons">
                                                            <label className="btn btn-outline-secondary active">
                                                                <input type="radio" name="options" id="option1"
                                                                    checked=""/> HDFC
                                                            </label>
                                                            <label className="btn btn-outline-secondary">
                                                                <input type="radio" name="options" id="option2"/> ICICI
                                                            </label>
                                                            <label className="btn btn-outline-secondary">
                                                                <input type="radio" name="options" id="option3"/> AXIS
                                                            </label>
                                                        </div>
                                                        <div className="form-row pt-3">
                                                            <div className="col-md-12 form-group">
                                                                <label className="form-label small font-weight-bold">Select
                                                                    Bank</label><br/>
                                                                <select className="custom-select form-control">
                                                                    <option>Bank</option>
                                                                    <option>KOTAK</option>
                                                                    <option>SBI</option>
                                                                    <option>UCO</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="cash" role="tabpanel"
                                                aria-labelledby="cash-tab">
                                                <div className="custom-control custom-checkbox pt-3">
                                                    <input type="checkbox" className="custom-control-input"
                                                        id="customControlAutosizing"/>
                                                    <label className="custom-control-label" for="customControlAutosizing">
                                                        <br/>Cash<br/><br/>
                                                        <p className="small text-muted m-0">Please keep exact change handy
                                                            to help us serve you better</p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="checkout.html" className="btn btn-success btn-lg btn-block mt-3"
                                        type="button">Continue</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="sticky_sidebar">
                        <div className="bg-white rounded overflow-hidden shadow-sm mb-3 checkout-sidebar">
                            <div className="d-flex align-items-center osahan-cart-item-profile border-bottom bg-white p-3">
                                <img alt="osahan" src="img/starter1.jpg" className="mr-3 rounded-circle img-fluid"/>
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
                                    <input placeholder="Delivery Area" type="text" className="form-control"/>
                                    <div className="input-group-append"><button id="button-addon2" type="button"
                                            className="btn btn-outline-secondary"><i className="icofont-pin"></i></button></div>
                                </div>
                            </div>
                            <div className="col-md-12 form-group"><label className="form-label">Complete Address</label><input
                                    placeholder="Complete Address e.g. house number, street name, landmark" type="text"
                                    className="form-control"/></div>
                            <div className="col-md-12 form-group"><label className="form-label">Delivery
                                    Instructions</label><input
                                    placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall" type="text"
                                    className="form-control"/></div>
                            <div className="mb-0 col-md-12 form-group">
                                <label className="form-label">Nickname</label>
                                <div className="btn-group btn-group-toggle w-100" data-toggle="buttons">
                                    <label className="btn btn-outline-secondary active">
                                        <input type="radio" name="options" id="option1" checked/> Home
                                    </label>
                                    <label className="btn btn-outline-secondary">
                                        <input type="radio" name="options" id="option2"/> Work
                                    </label>
                                    <label className="btn btn-outline-secondary">
                                        <input type="radio" name="options" id="option3"/> Other
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
 
export default Cart;