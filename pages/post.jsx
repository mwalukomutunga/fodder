import SignUpNav from "../Components/SignupNav";
import { useState } from "react";
import requests from "../agent";
import { useRouter } from "next/router";
import Select from "react-select";

const Post = () => {
  var router = useRouter();
  const [inputs, setInputs] = useState({
    county: "Makueni",
    address: "Nairobi,Kenya",
    subCounty: "Makueni",
    ward: "Kithuki",
    description: "Fodder bales",
    quantity: 10,
    uom: "Bales",
    unitPrice: 2000,
    discount: 10,
    freeTransport: true,
    paths: ["img/fodder-unsplash.jpg"],
  });
  const HandleSubmit = (e) => {
    e.preventDefault();
    requests.post("posts", inputs);
    router.push("/");
  };

   const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];
  const typeOptions = [
    { value: 'bales', label: 'Bales', },
    { value: 'kg', label: 'Kg',},
    { value: 'fodder', label: 'Fodder',},
   
  ];
  const handleInputChange = (event) => {
    event.persist();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };
  const handleUpLoad = (event) => {
    const files = event.target.files;
    // const data = new FormData();
    // for (var x = 0; x < files.length; x++) {
    //   data.append("formFile", files[x]);
    //  console.log(data)
    // }
    const formData = new FormData();

    formData.append("files", files[0]);
    for (var x = 1; x < files.length; x++) {
      formData.append("files", files[0]);
    }
    requests.post("/uploads", formData).then((res) => {
      setInputs((inputs) => ({ ...inputs, paths: res.paths }));
    });
  };

  return (
    <section className="py-4 osahan-main-body">
      <div className="container">
        <div className="row">
          <SignUpNav />
          <div className="col-lg-8 p-4 bg-white rounded shadow-sm">
            <h4 className="mb-4 profile-title">Upload your fodders</h4>
            <div id="edit_profile">
              <div className="p-0">
                <form onSubmit={(e) => HandleSubmit(e)}>
                  {/* <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullname"
                      required
                      value={inputs.fullname}
                      onChange={handleInputChange}
                    />
                  </div> */}
                  {/* <div className="form-group">
                    <label>Mobile Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      required
                      value={inputs.phone}
                      onChange={handleInputChange}
                    />
                  </div> */}
                 
                  <div className="form-group">
                    <label>Home Address</label>
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
                    <label>Available Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      name="quantity"
                      required
                      value={inputs.quantity}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* <div className="form-group">
                    <label>Uom</label>
                    <input
                      type="text"
                      className="form-control"
                      name="uom"
                      required
                      value={inputs.uom}
                      onChange={handleInputChange}
                    />
                  </div> */}
                   <div className="form-group">
                    <label>Uom</label>
                    <Select
                      isDisabled={false}
                      isLoading={false}
                      isClearable={true}
                      defaultValue={typeOptions[0]}
                      isSearchable={true}
                      name="uom"
                      onChange={(e)=> setInputs((inputs) => ({ ...inputs, uom: e.value }))}
                      options={typeOptions}
                    />                 
                  </div>
                  <div className="form-group">
                    <label>Unit Price</label>
                    <input
                      type="number"
                      className="form-control"
                      name="unitPrice"
                      required
                      value={inputs.unitPrice}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Discount (%)</label>
                    <input
                      type="number"
                      className="form-control"
                      name="discount"
                      required
                      value={inputs.discount}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Upload Images</label>
                    <input
                      type="file"
                      className="form-control"
                      name="files"
                      accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp"
                      required
                      multiple
                      value={inputs.file}
                      onChange={handleUpLoad}
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

export default Post;
