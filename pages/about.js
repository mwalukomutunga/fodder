function About() {
  return (
    <>
      <nav aria-label="breadcrumb" class="breadcrumb mb-0">
        <div class="container">
          <ol class="d-flex align-items-center mb-0 p-0">
            <li class="breadcrumb-item">
              <a href="product_details.html#" class="text-success">
                Home
              </a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Product details
            </li>
          </ol>
        </div>
      </nav>

      <section class="py-4 osahan-main-body">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="recommend-slider mb-3">
                <div class="osahan-slider-item">
                  <img
                    src="img/recommend/r1.jpg"
                    class="img-fluid mx-auto shadow-sm rounded"
                    alt="Responsive image"
                  />
                </div>
                <div class="osahan-slider-item">
                  <img
                    src="img/recommend/r2.jpg"
                    class="img-fluid mx-auto shadow-sm rounded"
                    alt="Responsive image"
                  />
                </div>
                <div class="osahan-slider-item">
                  <img
                    src="img/recommend/r3.jpg"
                    class="img-fluid mx-auto shadow-sm rounded"
                    alt="Responsive image"
                  />
                </div>
              </div>
              <div class="pd-f d-flex align-items-center mb-3">
                <a
                  href="cart.html"
                  class="btn btn-warning p-3 rounded btn-block d-flex align-items-center justify-content-center mr-3 btn-lg"
                >
                  <i class="icofont-plus m-0 mr-2"></i> ADD TO CART
                </a>
                <a
                  href="cart.html"
                  class="btn btn-success p-3 rounded btn-block d-flex align-items-center justify-content-center btn-lg m-0"
                >
                  <i class="icofont-cart m-0 mr-2"></i> BUY NOW
                </a>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="p-4 bg-white rounded shadow-sm">
                <div class="pt-0">
                  <h2 class="font-weight-bold">Valencia Orange - Imported</h2>
                  <p class="font-weight-light text-dark m-0 d-flex align-items-center">
                    Product MRP : <b class="h6 text-dark m-0">$263.00</b>
                    <span class="badge badge-danger ml-2">50% OFF</span>
                  </p>
                  <a href="review.html">
                    <div class="rating-wrap d-flex align-items-center mt-2">
                      <ul class="rating-stars list-unstyled">
                        <li>
                          <i class="icofont-star text-warning"></i>
                          <i class="icofont-star text-warning"></i>
                          <i class="icofont-star text-warning"></i>
                          <i class="icofont-star text-warning"></i>
                          <i class="icofont-star"></i>
                        </li>
                      </ul>
                      <p class="label-rating text-muted ml-2 small">
                        (245 Reviews)
                      </p>
                    </div>
                  </a>
                </div>
                <div class="pt-2">
                  <div class="row">
                    <div class="col-6">
                      <p class="font-weight-bold m-0">Delivery</p>
                      <p class="text-muted m-0">Free</p>
                    </div>
                    <div class="col-6 text-right">
                      <p class="font-weight-bold m-0">Available in:</p>
                      <p class="text-muted m-0">1 kg, 2 kg, 5 kg</p>
                    </div>
                  </div>
                </div>
                <div class="details">
                  <div class="pt-3 bg-white">
                    <div class="d-flex align-items-center">
                      <div
                        class="btn-group osahan-radio btn-group-toggle"
                        data-toggle="buttons"
                      >
                        <label class="btn btn-secondary active">
                          <input
                            type="radio"
                            name="options"
                            id="option1"
                            checked
                          />
                          4 pcs
                        </label>
                        <label class="btn btn-secondary">
                          <input type="radio" name="options" id="option2" /> 6
                          pcs
                        </label>
                        <label class="btn btn-secondary">
                          <input type="radio" name="options" id="option3" /> 1
                          kg
                        </label>
                      </div>
                      <a class="ml-auto" href="product_details.html#">
                        <form
                          id="myform"
                          class="cart-items-number d-flex"
                          method="POST"
                          action="product_details.html#"
                        >
                          <input
                            type="button"
                            value="-"
                            class="qtyminus btn btn-success btn-sm"
                            field="quantity"
                          />
                          <input
                            type="text"
                            name="quantity"
                            value="1"
                            class="qty form-control"
                          />
                          <input
                            type="button"
                            value="+"
                            class="qtyplus btn btn-success btn-sm"
                            field="quantity"
                          />
                        </form>
                      </a>
                    </div>
                  </div>
                  <div class="pt-3">
                    <div class="input-group mb-3 border rounded shadow-sm overflow-hidden bg-white">
                      <div class="input-group-prepend">
                        <button class="border-0 btn btn-outline-secondary text-success bg-white">
                          <i class="icofont-search"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        class="shadow-none border-0 form-control form-control-lg pl-0"
                        placeholder="Type your city (e.g Chennai, Pune)"
                        aria-label=""
                        aria-describedby="basic-addon1"
                      />
                    </div>
                    <p class="font-weight-bold mb-2">Product Details</p>
                    <p class="text-muted small mb-0">
                      High quality Fresh Orange fruit exporters from South Korea
                      for sale. All citrus trees belong to the single genus
                      Citrus and remain almost entirely interfertile. This
                      includes grapefruits, lemons, limes, oranges, and various
                      other types and hybrids. The fruit of any citrus tree is
                      considered a hesperidium, a kind of modified berry; it is
                      covered by a rind wall.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        class="modal fade right-modal"
        id="login"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header p-0">
              <nav class="schedule w-100">
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    class="nav-link active col-5 py-4"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="product_details.html#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    <p class="mb-0 font-weight-bold">Sign in</p>
                  </a>
                  <a
                    class="nav-link col-5 py-4"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="product_details.html#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    <p class="mb-0 font-weight-bold">Sign up</p>
                  </a>
                  <a
                    class="nav-link col-2 p-0 d-flex align-items-center justify-content-center"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <h1 class="m-0 h4 text-dark">
                      <i class="icofont-close-line"></i>
                    </h1>
                  </a>
                </div>
              </nav>
            </div>
            <div class="modal-body p-0">
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div class="osahan-signin p-4 rounded">
                    <div class="p-2">
                      <h2 class="my-0">Welcome Back</h2>
                      <p class="small mb-4">Sign in to Continue.</p>
                      <form action="verification.html">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email</label>
                          <input
                            placeholder="Enter Email"
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input
                            placeholder="Enter Password"
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <button
                          type="submit"
                          class="btn btn-success btn-lg rounded btn-block"
                        >
                          Sign in
                        </button>
                      </form>
                      <p class="text-muted text-center small m-0 py-3">or</p>
                      <a
                        href="verification.html"
                        class="btn btn-dark btn-block rounded btn-lg btn-apple"
                      >
                        <i class="icofont-brand-apple mr-2"></i> Sign up with
                        Apple
                      </a>
                      <a
                        href="verification.html"
                        class="btn btn-light border btn-block rounded btn-lg btn-google"
                      >
                        <i class="icofont-google-plus text-danger mr-2"></i>{" "}
                        Sign up with Google
                      </a>
                      <p class="text-center mt-3 mb-0">
                        <a href="signup.html" class="text-dark">
                          Don't have an account? Sign up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div class="osahan-signup bg-white p-4">
                    <div class="p-2">
                      <h2 class="my-0">Let's get started</h2>
                      <p class="small mb-4">
                        Create account to see our top picks for you!
                      </p>
                      <form action="verification.html">
                        <div class="form-group">
                          <label for="exampleInputName1">Name</label>
                          <input
                            placeholder="Enter Name"
                            type="text"
                            class="form-control"
                            id="exampleInputName1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputNumber1">Phone Number</label>
                          <input
                            placeholder="Enter Phone Number"
                            type="number"
                            class="form-control"
                            id="exampleInputNumber1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email</label>
                          <input
                            placeholder="Enter Email"
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input
                            placeholder="Enter Password"
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword2">
                            Confirmation Password
                          </label>
                          <input
                            placeholder="Enter Confirmation Password"
                            type="password"
                            class="form-control"
                            id="exampleInputPassword2"
                          />
                        </div>
                        <button
                          type="submit"
                          class="btn btn-success rounded btn-lg btn-block"
                        >
                          Create Account
                        </button>
                      </form>
                      <p class="text-muted text-center small py-2 m-0">or</p>
                      <a
                        href="verification.html"
                        class="btn btn-dark btn-block rounded btn-lg btn-apple"
                      >
                        <i class="icofont-brand-apple mr-2"></i> Sign up with
                        Apple
                      </a>
                      <a
                        href="verification.html"
                        class="btn btn-light border btn-block rounded btn-lg btn-google"
                      >
                        <i class="icofont-google-plus text-danger mr-2"></i>{" "}
                        Sign up with Google
                      </a>
                      <p class="text-center mt-3 mb-0">
                        <a href="signin.html" class="text-dark">
                          Already have an account! Sign in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer p-0 border-0">
              <div class="col-6 m-0 p-0">
                <a
                  href="product_details.html#"
                  class="btn border-top border-right btn-lg btn-block"
                  data-dismiss="modal"
                >
                  Close
                </a>
              </div>
              <div class="col-6 m-0 p-0">
                <a
                  href="help_support.html"
                  class="btn border-top btn-lg btn-block"
                >
                  Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
