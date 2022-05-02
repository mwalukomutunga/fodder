import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";
const MainNav = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  useEffect(() => {
    console.log(session);
  }, [session]);
  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  return (
    <div className="bg-white shadow-sm osahan-main-nav">
      <nav className="navbar navbar-expand-lg navbar-light bg-white osahan-header py-0 container">
        <a className="navbar-brand mr-0" href="home.html">
          <img className="img-fluid logo-img " src="img/logo.png" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="ml-3 d-flex align-items-center">
          <div className="dropdown mr-3">
            <a
              className="text-dark dropdown-toggle d-flex align-items-center osahan-location-drop"
              href="listing.html#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div>
                <i className="icofont-location-pin d-flex align-items-center bg-light rounded-pill p-2 icofont-size border shadow-sm mr-2"></i>
              </div>
              <div>
                <p className="text-muted mb-0 small">Select Location</p>
                Counties kenya
              </div>
            </a>
            <div
              className="dropdown-menu osahan-select-loaction p-3"
              aria-labelledby="navbarDropdown"
            >
              <span>Select your county to start shopping</span>
              <form className="form-inline my-2">
                <div className="input-group p-0 col-lg-12">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Search Location"
                  />
                  <div className="input-group-prepend">
                    <div className="btn btn-success rounded-right btn-sm">
                      <i className="icofont-location-arrow"></i> Detect
                    </div>
                  </div>
                </div>
              </form>
              <div className="city pt-2">
                <h6>Top Counties</h6>
                <p className="border-bottom m-0 py-1">
                  <a href="listing.html#" className="text-dark">
                    Migori
                  </a>
                </p>
                <p className="border-bottom m-0 py-1">
                  <a href="listing.html#" className="text-dark">
                    Makueni
                  </a>
                </p>
                <p className="border-bottom m-0 py-1">
                  <a href="listing.html#" className="text-dark">
                    Kitui
                  </a>
                </p>
                <p className="m-0 py-1">
                  <a href="listing.html#" className="text-dark">
                    Homa bay
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="input-group mr-sm-2 col-lg-12">
            <input
              type="text"
              className="form-control"
              placeholder="Search by location.."
            />
            <div className="input-group-prepend">
              <div className="btn btn-success rounded-right">
                <i className="icofont-search"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-auto d-flex align-items-center">
          {/* <a href="listing.html#" data-toggle="modal" data-target="#login"
                    className="mr-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
                    <i className="icofont-login"></i>
                </a> */}
          {session && (
            <div className="dropdown mr-3">
              <a
                href="/"
                className="dropdown-toggle text-dark"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="img/user.png"
                  className="img-fluid rounded-circle header-user mr-2"
                />
                Hi {session?.user.name}
              </a>
              <div
                className="dropdown-menu dropdown-menu-right top-profile-drop"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="/account">
                  My account
                </a>
                {/* <a className="dropdown-item" onClick={() => signIn()} href="signin.html">Sign In</a>
                        <a className="dropdown-item"  onClick={() => signOut()} href="signin.html">Register</a> */}

                <a
                  className="dropdown-item"
                  onClick={() => signOut()}
                  href="signin.html"
                >
                  Logout
                </a>
              </div>
            </div>
          )}

          <a
            href="cart.html"
            className="ml-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm"
          >
            <i className="icofont-shopping-cart"></i>
          </a>
        </div>
      </nav>

      <div className="bg-color-head">
        <div className="container menu-bar d-flex align-items-center">
          <ul className="list-unstyled form-inline mb-0">
            <li className="nav-item active">
              <a className="nav-link text-white pl-0" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link text-white pl-0" href="/myorders">
                My Orders{" "}
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white pl-0" href="/account">
                Account{" "}
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white pl-0" href="/address">
                Address{" "}
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white pl-0" href="/cart">
                Cart{" "}
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white pl-0" href="/checkout">
                Checkout{" "}
              </a>
            </li>
          </ul>
          <div className="list-unstyled form-inline mb-0 ml-auto">
            {session && (
            <Link href="post">
              <a className="text-white px-3 py-2">
                Upload
              </a>
            </Link>
            )}
            {!session && (
              <a
                href="picks_today.html"
                onClick={() => signIn()}
                className="text-white px-3 py-2"
              >
                Login
              </a>
            )}
            {!session && (
              <Link href="/signup">
                <a className="text-white px-3 py-2">Register</a>
              </Link>
            )}
            {session && (
              <a
                href="promos.html"
                onClick={() => signOut()}
                className="text-white px-3 py-2"
              >
                <i></i>logout
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;