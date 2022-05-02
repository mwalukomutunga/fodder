import SignUpNav from "../Components/SignupNav";
import { useState } from "react";
import requests from "../agent";
import { useRouter } from "next/router";
import {  signIn } from "next-auth/react";

const SignUp = () => {
    var router =useRouter();
    const [inputs, setInputs] = useState({
        address:"Nairobi, Kenya",
        fullname:"Stephen Stephen",
        phone: "0710623337",
        userType:"Seller",
        county:"Makueni",
        subCounty:"Makueni",
        ward:"Kithuki Kitise ward",
        email:"example@mail.com" ,
        Password:"123456"      




    });
  const HandleSubmit = (e) => {
      e.preventDefault();
      if(inputs.password ===inputs.confirmpassword)
        {
            requests.post('register',inputs);
            signIn();
        }
       else{
        alert('Sorry! Passwords do not match.')
        router.push('/signup')
       }
        
  };

  const handleInputChange = (event) => {
    event.persist();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  return (
    <section className="py-4 osahan-main-body">
      <div className="container">
        <div className="row">
          <SignUpNav />
          <div className="col-lg-8 p-4 bg-white rounded shadow-sm">
            <h4 className="mb-4 profile-title">
              Welcome! Register to access our services
            </h4>
            <div id="edit_profile">
              <div className="p-0">
                <form onSubmit={(e) =>HandleSubmit(e)}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullname"
                      required
                      value={inputs.fullname}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      required
                      value={inputs.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>User Type</label>
                    <input
                      type="text"
                      className="form-control"
                      name="userType"
                      required
                      value={inputs.userType}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      required
                      value={inputs.address}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>County</label>
                    <input
                      type="text"
                      className="form-control"
                      name="county"
                            required
                            value={inputs.county}
                            onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Sub County</label>
                    <input
                      type="text"
                      className="form-control"                     
                      name="subCounty"
                      required
                      value={inputs.subCounty}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Ward</label>
                    <input
                      type="text"
                      className="form-control"                     
                      name="ward"
                      required
                      value={inputs.ward}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"                     
                      name="password"
                      required
                      value={inputs.password}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"                     
                      name="confirmpassword"
                      required
                      value={inputs.confirmpassword}
                      onChange={handleInputChange}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
