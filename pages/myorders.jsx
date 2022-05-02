const MyOrders = () => {
    return ( <section className="py-4 osahan-main-body">
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <ul className="nav nav-tabs custom-tabs border-0 flex-column bg-white rounded overflow-hidden shadow-sm p-2 c-t-order"
                    id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link border-0 text-dark py-3 active" id="completed-tab" data-toggle="tab"
                            href="my_order.html#completed" role="tab" aria-controls="completed"
                            aria-selected="true">
                            <i className="icofont-check-alt mr-2 text-success mb-0"></i> Completed</a>
                    </li>
                    <li className="nav-item border-top" role="presentation">
                        <a className="nav-link border-0 text-dark py-3" id="progress-tab" data-toggle="tab"
                            href="my_order.html#progress" role="tab" aria-controls="progress" aria-selected="false">
                            <i className="icofont-wall-clock mr-2 text-warning mb-0"></i> On Progress</a>
                    </li>
                    <li className="nav-item border-top" role="presentation">
                        <a className="nav-link border-0 text-dark py-3" id="canceled-tab" data-toggle="tab"
                            href="my_order.html#canceled" role="tab" aria-controls="canceled" aria-selected="false">
                            <i className="icofont-close-line mr-2 text-danger mb-0"></i> Canceled</a>
                    </li>
                </ul>
            </div>
            <div className="tab-content col-md-9" id="myTabContent">
                <div className="tab-pane fade show active" id="completed" role="tabpanel"
                    aria-labelledby="completed-tab">
                    <div className="order-body">
                        <div className="pb-3">
                            <a href="status_complete.html" className="text-decoration-none text-dark">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex align-items-center mb-3">
                                        <p className="bg-success text-white py-1 px-2 mb-0 rounded small">Delivered</p>
                                        <p className="text-muted ml-auto small mb-0"><i className="icofont-clock-time"></i>
                                            06/04/2020</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="text-muted m-0">Transaction. ID<br/>
                                            <span className="text-dark font-weight-bold">#321DERS</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Delivered to<br/>
                                            <span className="text-dark font-weight-bold">Home</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Total Payment<br/>
                                            <span className="text-dark font-weight-bold">$12.74</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="pb-3">
                            <a href="status_complete.html" className="text-decoration-none text-dark">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex align-items-center mb-3">
                                        <p className="bg-success text-white py-1 px-2 rounded small m-0">Delivered</p>
                                        <p className="text-muted ml-auto small m-0"><i className="icofont-clock-time"></i>
                                            06/04/2020</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="text-muted m-0">Transaction. ID<br/>
                                            <span className="text-dark font-weight-bold">#321DERS</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Delivered to<br/>
                                            <span className="text-dark font-weight-bold">Home</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Total Payment<br/>
                                            <span className="text-dark font-weight-bold">$12.74</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="pb-3">
                            <a href="status_complete.html" className="text-decoration-none text-dark">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex align-items-center mb-3">
                                        <p className="bg-success text-white py-1 px-2 rounded small mb-0">Delivered</p>
                                        <p className="text-muted ml-auto small m-0"><i className="icofont-clock-time"></i>
                                            06/04/2020</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="text-muted m-0">Transaction. ID<br/>
                                            <span className="text-dark font-weight-bold">#321DERS</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Delivered to<br/>
                                            <span className="text-dark font-weight-bold">Home</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Total Payment<br/>
                                            <span className="text-dark font-weight-bold">$12.74</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="pb-3">
                            <a href="status_onprocess.html" className="text-decoration-none text-dark">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex align-items-center mb-3">
                                        <p className="bg-warning text-white py-1 px-2 rounded small m-0">On Process</p>
                                        <p className="text-muted ml-auto small m-0"><i className="icofont-clock-time"></i>
                                            06/04/2020</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="text-muted m-0">Transaction. ID<br/>
                                            <span className="text-dark font-weight-bold">#321DERS</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Delivered to<br/>
                                            <span className="text-dark font-weight-bold">Home</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Total Payment<br/>
                                            <span className="text-dark font-weight-bold">$12.74</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="pb-3">
                            <a href="status_canceled.html" className="text-decoration-none text-dark">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex align-items-center mb-3">
                                        <p className="bg-danger text-white py-1 px-2 rounded small m-0">Canceled</p>
                                        <p className="text-muted ml-auto small m-0"><i className="icofont-clock-time"></i>
                                            06/04/2020</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="text-muted m-0">Transaction. ID<br/>
                                            <span className="text-dark font-weight-bold">#321DERS</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Delivered to<br/>
                                            <span className="text-dark font-weight-bold">Home</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Total Payment<br/>
                                            <span className="text-dark font-weight-bold">$12.74</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="progress" role="tabpanel" aria-labelledby="progress-tab">
                    <div className="order-body">
                        <div className="pb-3">
                            <a href="status_onprocess.html" className="text-decoration-none text-dark">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex align-items-center mb-3">
                                        <p className="bg-warning text-white py-1 px-2 rounded small m-0">On Process</p>
                                        <p className="text-muted ml-auto small m-0"><i className="icofont-clock-time"></i>
                                            06/04/2020</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="text-muted m-0">Transaction. ID<br/>
                                            <span className="text-dark font-weight-bold">#321DERS</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Delivered to<br/>
                                            <span className="text-dark font-weight-bold">Home</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Total Payment<br/>
                                            <span className="text-dark font-weight-bold">$12.74</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="pb-3">
                            <a href="status_onprocess.html" className="text-decoration-none text-dark">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex align-items-center mb-3">
                                        <p className="bg-warning text-white py-1 px-2 rounded small m-0">Dispatching</p>
                                        <p className="text-muted ml-auto small m-0"><i className="icofont-clock-time"></i>
                                            06/04/2020</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="text-muted m-0">Transaction. ID<br/>
                                            <span className="text-dark font-weight-bold">#321DERS</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Delivered to<br/>
                                            <span className="text-dark font-weight-bold">Home</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Total Payment<br/>
                                            <span className="text-dark font-weight-bold">$12.74</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="pb-3">
                            <a href="status_onprocess.html" className="text-decoration-none text-dark">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex align-items-center mb-3">
                                        <p className="bg-warning text-white py-1 px-2 rounded small m-0">On the way</p>
                                        <p className="text-muted ml-auto small m-0"><i className="icofont-clock-time"></i>
                                            06/04/2020</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="text-muted m-0">Transaction. ID<br/>
                                            <span className="text-dark font-weight-bold">#321DERS</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Delivered to<br/>
                                            <span className="text-dark font-weight-bold">Home</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Total Payment<br/>
                                            <span className="text-dark font-weight-bold">$12.74</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="canceled" role="tabpanel" aria-labelledby="canceled-tab">
                    <div className="order-body">
                        <div className="pb-3">
                            <a href="status_canceled.html" className="text-decoration-none text-dark">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex align-items-center mb-3">
                                        <p className="bg-danger text-white py-1 px-2 rounded small m-0">Failed Payment
                                        </p>
                                        <p className="text-muted ml-auto small m-0"><i className="icofont-clock-time"></i>
                                            06/04/2020</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="text-muted m-0">Transaction. ID<br/>
                                            <span className="text-dark font-weight-bold">#321DERS</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Delivered to<br/>
                                            <span className="text-dark font-weight-bold">Home</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Total Payment<br/>
                                            <span className="text-dark font-weight-bold">$12.74</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="pb-3">
                            <a href="status_canceled.html" className="text-decoration-none text-dark">
                                <div className="p-3 rounded shadow-sm bg-white">
                                    <div className="d-flex align-items-center mb-3">
                                        <p className="bg-danger text-white py-1 px-2 rounded small m-0">Canceled</p>
                                        <p className="text-muted ml-auto small m-0"><i className="icofont-clock-time"></i>
                                            06/04/2020</p>
                                    </div>
                                    <div className="d-flex">
                                        <p className="text-muted m-0">Transaction. ID<br/>
                                            <span className="text-dark font-weight-bold">#321DERS</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Delivered to<br/>
                                            <span className="text-dark font-weight-bold">Home</span>
                                        </p>
                                        <p className="text-muted m-0 ml-auto">Total Payment<br/>
                                            <span className="text-dark font-weight-bold">$12.74</span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> );
}
 
export default MyOrders;