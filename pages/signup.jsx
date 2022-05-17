import SignUpNav from "../Components/SignupNav";
import { useState,useEffect } from "react";
import requests from "../agent";
import { useRouter } from "next/router";
import {  signIn } from "next-auth/react";
import Select from "react-select";

const SignUp = () => {
    var router =useRouter();
    const [counties, setCounties] = useState([]);
    const [subCounties, setSubCounties] = useState([]);
    const [wards, setWards] = useState([]);
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
  useEffect(() => {
    requests.get("Administration").then((res) => {
      setCounties(res);
    });
  }, []);
  const handleInputChange = (event) => {
    event.persist();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  
  const typeOptions = [
    { value: "Seller", label: "Seller" },
    { value: "Buyer", label: "Buyer" },
    { value: "Transporter", label: "Transporter" },
  ];

  let countyOptions = new Set();
  let countystr = new Set();
  const calcCounties = counties.map((item, index) => {
    if (!countystr.has(item.county)) {
      countystr.add(item.county);
      countyOptions.add({ value: item.county, label: item.county });
    }
  });
  const handleCounty = (e) => {
    setInputs((inputs) => ({ ...inputs, county: e.value }));

    let subcountyOptions = new Set();
    let subcountystr = new Set();
    counties
      .filter((x) => x.county == e.value)
      .map((item, index) => {
        if (!subcountystr.has(item.subCounty)) {
          subcountystr.add(item.subCounty);
          subcountyOptions.add({
            value: item.subCounty,
            label: item.subCounty,
          });
        }
      });
    setSubCounties(Array.from(subcountyOptions));
  };

  const handleSubCounty = (e) => {
    setInputs((inputs) => ({ ...inputs, subCounty: e.value }));

    let wardOptions = new Set();
    let wardstr = new Set();
    counties
      .filter((x) => x.subCounty == e.value)
      .map((item, index) => {
        if (!wardstr.has(item.ward)) {
          wardstr.add(item.ward);
          wardOptions.add({
            value: item.ward,
            label: item.ward,
          });
        }
      });
      setWards(Array.from(wardOptions));
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
                  {/* <div className="form-group">
                    <label>User Type</label>
                    <input
                      type="text"
                      className="form-control"
                      name="userType"
                      required
                      value={inputs.userType}
                      onChange={handleInputChange}
                    />
                  </div> */}
                   <div className="form-group">
                    <label>User Type</label>
                    <Select
                      isDisabled={false}
                      isLoading={false}
                      isClearable={true}
                      defaultValue={typeOptions[0]}
                      isSearchable={true}
                      name="userType"
                      onChange={(e) =>
                        setInputs((inputs) => ({ ...inputs, userType: e.value }))
                      }
                      options={typeOptions}
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
                    <label>County </label>
                    <Select
                      isDisabled={false}
                      isLoading={false}
                      isClearable={true}
                      defaultValue={Array.from(countyOptions)[0]}
                      isSearchable={true}
                      name="county"
                      onChange={(e) => handleCounty(e)}
                      options={Array.from(countyOptions)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Sub County </label>
                    <Select
                      isDisabled={false}
                      isLoading={false}
                      isClearable={true}
                      defaultValue={subCounties[0]}
                      isSearchable={true}
                      name="subCounty"
                      onChange={(e) => handleSubCounty(e)}
                      options={subCounties}
                    />
                  </div>
                  <div className="form-group">
                    <label>Ward </label>
                    <Select
                      isDisabled={false}
                      isLoading={false}
                      isClearable={true}
                      defaultValue={subCounties[0]}
                      isSearchable={true}
                      name="subCounty"
                      onChange={(e)=> setInputs((inputs) => ({ ...inputs, ward: e.value }))}
                      options={wards}
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
