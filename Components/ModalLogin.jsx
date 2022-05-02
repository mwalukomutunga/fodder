import { useSession, signIn, signOut } from "next-auth/react";
const Login = () => {
  return (
    <div
      className="modal fade right-modal"
      id="login"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header p-0">
            <nav className="schedule w-100">
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  className="nav-link active col-5 py-4"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="listing.html#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  <p className="mb-0 font-weight-bold">Sign in</p>
                </a>
                <a
                  className="nav-link col-5 py-4"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="listing.html#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  <p className="mb-0 font-weight-bold">Sign up</p>
                </a>
                <a
                  className="nav-link col-2 p-0 d-flex align-items-center justify-content-center"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <h1 className="m-0 h4 text-dark">
                    <i className="icofont-close-line"></i>
                  </h1>
                </a>
              </div>
            </nav>
          </div>
          <div className="modal-body p-0">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="osahan-signin p-4 rounded">
                  <div className="p-2">
                    <h2 className="my-0">Welcome Back</h2>
                    <p className="small mb-4">Sign in to Continue.</p>
                    <form action="verification.html">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          placeholder="Enter Email"
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          placeholder="Enter Password"
                          type="password"
                          className="form-control"
                        />
                      </div>
                      <button
                        type="submit"
                        onClick={() => signIn()}
                        className="btn btn-success btn-lg rounded btn-block"
                      >
                        Sign in
                      </button>
                    </form>

                    <p className="text-center mt-3 mb-0">
                      {" "}
                      <a className="text-dark">
                        Don't have an account? Sign up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="osahan-signup bg-white p-4">
                  <div className="p-2">
                    <h2 className="my-0">Let's get started</h2>
                    <p className="small mb-4">
                      Create account to see our top picks for you!
                    </p>
                    <form action="verification.html">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          placeholder="Enter Name"
                          type="text"
                          className="form-control"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          placeholder="Enter Phone Number"
                          type="number"
                          className="form-control"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          placeholder="Enter Email"
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          placeholder="Enter Password"
                          type="password"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Confirmation Password</label>
                        <input
                          placeholder="Enter Confirmation Password"
                          type="password"
                          className="form-control"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-success rounded btn-lg btn-block"
                      >
                        Create Account
                      </button>
                    </form>
                    <p className="text-muted text-center small py-2 m-0">or</p>
                    <a
                      href="verification.html"
                      className="btn btn-dark btn-block rounded btn-lg btn-apple"
                    >
                      <i className="icofont-brand-apple mr-2"></i> Sign up with
                      Apple
                    </a>
                    <a
                      href="verification.html"
                      className="btn btn-light border btn-block rounded btn-lg btn-google"
                    >
                      <i className="icofont-google-plus text-danger mr-2"></i>{" "}
                      Sign up with Google
                    </a>
                    <p className="text-center mt-3 mb-0">
                      <a href="signin.html" className="text-dark">
                        Already have an account! Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer p-0 border-0">
            <div className="col-6 m-0 p-0">
              <a
                href="listing.html#"
                className="btn border-top border-right btn-lg btn-block"
                data-dismiss="modal"
              >
                Close
              </a>
            </div>
            <div className="col-6 m-0 p-0">
              <a
                href="help_support.html"
                className="btn border-top btn-lg btn-block"
              >
                Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
