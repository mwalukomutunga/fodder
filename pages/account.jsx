import AccountNav from "../Components/AccountNav";
import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import requests from "../agent";

const Account = () => {
  const [address,setAddress] = useState({});
  const [inputs, setInputs] = useState();
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    requests.get("location/" + session?.user.name).then((res) => {
      setAddress(res)
    });
    setInputs((inputs) => ({ ...inputs, name:session?.user.name,phone:session?.user.name}));
    // setInputs({...inputs},{name:session?.user.name,phone:session?.user.name})
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;
  if (!session) {
    signIn();
  }
  return (
    <section className="py-4 osahan-main-body">
      <div className="container">
        <div className="row">
          <AccountNav />
          <div className="col-lg-8 p-4 bg-white rounded shadow-sm">
            <h4 className="mb-4 profile-title">My account</h4>
            <div id="edit_profile">
              <div className="p-0">
                <form action="/account">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName1"
                      value={session?.user.name}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input
                      type="number"
                      className="form-control"
                      value={address?.phone}
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="email"
                      className="form-control"
                      value={address?.homeAddress}
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-success btn-block btn-lg"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
              <div className="additional mt-3">
                <div className="change_password mb-1">
                 <Link  href="/changepassword">
                 <a
                   
                    className="p-3 btn-light border btn d-flex align-items-center"
                  >
                    Change Password
                    <i className="icofont-rounded-right ml-auto"></i>
                  </a>
                 </Link>
                </div>
                <div className="deactivate_account">
                 <Link  href="/deactivate">
                 <a
                    className="p-3 btn-light border btn d-flex align-items-center"
                  >
                    Deactivate Account
                    <i className="icofont-rounded-right ml-auto"></i>
                  </a>
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
