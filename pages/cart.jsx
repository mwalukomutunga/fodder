import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../context/cart.slice";
// import requests from "../agent";

import Link from "next/link";
import requests from "../agent";

// Reference to the dispatch function from redux store

const Cart = () => {
  const [address, setAddress] = useState({});
  const [inputs, setInputs] = useState();
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.user.name) {
      requests.get("location/" + session?.user.name).then((res) => {
        setAddress(res);
      });
      setInputs((inputs) => ({
        ...inputs,
        name: session?.user.name,
        phone: session?.user.name,
      }));
    }
    if (!session) {
      signIn();
    }
  }, [session]);

  let total = cart.reduce(
    (accumulator, post) => post.unitPrice * post.quantity + accumulator,
    0
  );
  let discounted = cart.reduce(
    (accumulator, post) =>
      accumulator +
      post.unitPrice * ((100 - post.discount) / 100) * post.quantity,
    0
  );

  const HandleSubmit = () => {
    requests.put("Address", inputs).then((res) => {
      setAddress(res);
      router.reload();
    });
  };
  const handleInputChange = (event) => {
    event.persist();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  return (
    <>
      <section className="py-4 osahan-main-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="accordion" id="accordionExample">
                <div className="card border-0 osahan-accor rounded shadow-sm overflow-hidden">
                  <div
                    className="card-header bg-white border-0 p-0"
                    id="headingOne"
                  >
                    <h2 className="mb-0">
                      <button
                        className="btn d-flex align-items-center bg-white btn-block text-left btn-lg h5 px-3 py-4 m-0"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <span className="c-number">1</span> Cart ({cart.length}{" "}
                        items)
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body p-0 border-top">
                      <div className="osahan-cart">
                        {cart.map((post, index) => (
                          <div
                            key={index}
                            className="cart-items bg-white position-relative border-bottom"
                          >
                            <a className="position-absolute">
                              <span className="badge badge-danger m-3">
                                {post.discount}%
                              </span>
                            </a>
                            <div className="d-flex  align-items-center p-3">
                              <a>
                                <img
                                  src={post.paths[0]}
                                  className="img-fluid"
                                />
                              </a>
                              <a className="ml-3 text-dark text-decoration-none w-100">
                                <h5 className="mb-1">
                                  {post.county}-{post.subCounty}-{post.ward}
                                </h5>
                                <p className="text-muted mb-2">
                                  <del className="text-success mr-1">
                                    {" "}
                                    {post.unitPrice}
                                  </del>
                                  {post.unitPrice *
                                    ((100 - post.discount) / 100)}
                                  /=
                                </p>
                                <div className="d-flex align-items-center">
                                  <p className="total_price font-weight-bold m-0">
                                    {post.address}
                                    <hr />
                                    Seller - {session?.user.name} <br />
                                    Free transport:{" "}
                                    {post.freeTransport.toString()}
                                  </p>
                                  <form className="cart-items-number d-flex ml-auto">
                                    <input
                                      type="button"
                                      value="-"
                                      className="qtyminus btn btn-success btn-sm"
                                      field="quantity"
                                      onClick={() =>
                                        dispatch(decrementQuantity(post.id))
                                      }
                                    />
                                    <input
                                      type="text"
                                      name="quantity"
                                      value={
                                        cart.find((x) => x.id == post.id)
                                          ?.quantity
                                      }
                                      className="qty form-control"
                                    />
                                    <input
                                      type="button"
                                      value="+"
                                      className="qtyplus btn btn-success btn-sm"
                                      field="quantity"
                                      onClick={() =>
                                        dispatch(incrementQuantity(post.id))
                                      }
                                    />
                                  </form>
                                </div>
                              </a>
                            </div>
                          </div>
                        ))}

                        <div>
                          <a
                            href="cart.html#"
                            className="text-decoration-none btn btn-block p-3"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsetwo"
                            aria-expanded="true"
                            aria-controls="collapsetwo"
                          >
                            <div className="rounded shadow bg-success d-flex align-items-center p-3 text-white">
                              <div className="more">
                                <h6 className="m-0">Subtotal ksh {total}</h6>
                                <p className="small m-0">Proceed to checkout</p>
                              </div>
                              <div className="ml-auto">
                                <i className="icofont-simple-right"></i>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card border-0 osahan-accor rounded shadow-sm overflow-hidden mt-3">
                  <div
                    className="card-header bg-white border-0 p-0"
                    id="headingtwo"
                  >
                    <h2 className="mb-0">
                      <button
                        className="btn d-flex align-items-center bg-white btn-block text-left btn-lg h5 px-3 py-4 m-0"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsetwo"
                        aria-expanded="true"
                        aria-controls="collapsetwo"
                      >
                        <span className="c-number">2</span> Order Address{" "}
                        <a
                          href="cart.html#"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          className="text-decoration-none text-success ml-auto"
                        >
                          {" "}
                          <i className="icofont-plus-circle mr-1"></i>Add New
                          Delivery Address
                        </a>
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapsetwo"
                    className="collapse"
                    aria-labelledby="headingtwo"
                    data-parent="#accordionExample"
                  >
                    {address && (
                      <div className="card-body p-0 border-top">
                        <div className="osahan-order_address">
                          <div className="p-3 row">
                            <div className="custom-control col-lg-12 custom-radio mb-6 position-relative border-custom-radio">
                              <div className="p-3 bg-white rounded shadow-sm w-200">
                                <div className="d-flex align-items-center mb-2">
                                  <p className="mb-0 h6">Home</p>
                                  <p className="mb-0 badge badge-success ml-auto">
                                    <i className="icofont-check-circled"></i>{" "}
                                    Default
                                  </p>
                                </div>
                                <p className="small text-muted m-0">
                                  {address?.homeAddress}
                                </p>
                                <p className="small text-muted m-0">
                                  {address?.completeAddress}
                                </p>
                                <p className="pt-2 m-0 text-right">
                                  <span className="small">
                                    <a
                                      href="cart.html#"
                                      data-toggle="modal"
                                      data-target="#exampleModal"
                                      className="text-decoration-none text-info"
                                    >
                                      Edit
                                    </a>
                                  </span>
                                </p>
                              </div>
                            </div>

                            <Link href="/success">
                              <a
                                className="btn btn-success btn-lg btn-block mt-3"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsethree"
                                aria-expanded="true"
                                aria-controls="collapsethree"
                              >
                                Place order
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sticky_sidebar">
                <div className="bg-white rounded overflow-hidden shadow-sm mb-3 checkout-sidebar">
                  <div className="d-flex align-items-center osahan-cart-item-profile border-bottom bg-white p-3">
                    <img
                      alt="osahan"
                      src="/img/FPSK LOGO.jpg"
                      className="mr-3 rounded-circle img-fluid"
                    />
                    <div className="d-flex flex-column">
                      <h6 className="mb-1 font-weight-bold">
                        {session?.user.name}
                      </h6>
                      <p className="mb-0 small text-muted">
                        <i className="feather-map-pin"></i>
                        {session?.user.email}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="bg-white p-3 clearfix">
                      <p className="font-weight-bold small mb-2">
                        Bill Details
                      </p>
                      <p className="mb-1">
                        Item Total{" "}
                        <span className="small text-muted">
                          ({cart.length} item (s))
                        </span>{" "}
                        <span className="float-right text-dark">
                          ksh {total}
                        </span>
                      </p>
                      {/* <p className="mb-1">
                        Store Charges{" "}
                        <span className="float-right text-dark">$62.8</span>
                      </p> */}
                      {/* <p className="mb-3">
                        Delivery Fee{" "}
                        <span
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Delivery partner fee - ksh 1500"
                          className="text-info ml-1"
                        >
                          <i className="icofont-info-circle"></i>
                        </span>
                        <span className="float-right text-dark">ksh 1500</span>
                      </p> */}
                      <h6 className="mb-0 text-success">
                        Total Discount
                        <span className="float-right text-success">
                          ksh {total - discounted}
                        </span>
                      </h6>
                    </div>
                    <div className="p-3 border-top">
                      <h5 className="mb-0">
                        TO PAY{" "}
                        <span className="float-right text-danger">
                          ksh {discounted}
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Delivery Address
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={HandleSubmit}>
                <div className="form-row">
                  <div className="col-md-12 form-group">
                    <label className="form-label">Delivery Area</label>
                    <div className="input-group">
                      <input
                        placeholder="Delivery Area"
                        type="text"
                        name="homeAddress"
                        onChange={handleInputChange}
                        className="form-control"
                      />
                      <div className="input-group-append">
                        <button
                          id="button-addon2"
                          type="button"
                          className="btn btn-outline-secondary"
                        >
                          <i className="icofont-pin"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <label className="form-label">Complete Address</label>
                    <input
                      placeholder="Complete Address e.g. house number, street name, landmark"
                      type="text"
                      name="completeAddress"
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <label className="form-label">Delivery Instructions</label>
                    <input
                      name="deliveryInstructions"
                      onChange={handleInputChange}
                      placeholder="Delivery Instructions e.g. Opposite Gold Souk Mall"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  {/* <div className="mb-0 col-md-12 form-group">
                    <label className="form-label">Nickname</label>
                    <div
                      className="btn-group btn-group-toggle w-100"
                      data-toggle="buttons"
                    >
                      <label className="btn btn-outline-secondary active">
                        <input
                          type="radio"
                          name="options"
                          id="option1"
                          defaultChecked
                        />{" "}
                        Home
                      </label>
                      <label className="btn btn-outline-secondary">
                        <input type="radio" name="options" id="option2" /> Work
                      </label>
                      <label className="btn btn-outline-secondary">
                        <input type="radio" name="options" id="option3" /> Other
                      </label>
                    </div>
                  </div> */}
                </div>
              </form>
            </div>
            <div className="modal-footer p-0 border-0">
              <div className="col-6 m-0 p-0">
                <button
                  type="button"
                  className="btn border-top btn-lg btn-block"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
              <div className="col-6 m-0 p-0">
                <button
                  onClick={() => HandleSubmit()}
                  type="button"
                  className="btn btn-success btn-lg btn-block"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
