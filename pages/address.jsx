import AccountNav from "../Components/AccountNav";
import { useEffect, useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { useSelector, useDispatch } from "react-redux";
import requests from "../agent";

const Address = () => {
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
        <>
            <section className="py-4 osahan-main-body">
                <div className="container">                
                    <div className="row">
                    <AccountNav/>
                        <div className="col-lg-8 p-4 bg-white rounded shadow-sm">
                            <div className="osahan-my_address">
                                <h4 className="mb-4 profile-title">My Addresses</h4>
                                <div className="custom-control custom-radio px-0 mb-3 position-relative border-custom-radio">
                                    <input type="radio" id="customRadioInline1" name="customRadioInline1"
                                        className="custom-control-input" defaultChecked />
                                    <label className="custom-control-label w-100" for="customRadioInline1">
                                        <div>
                                            <div className="p-3 bg-white rounded shadow-sm w-100">
                                                <div className="d-flex align-items-center mb-2">
                                                    <p className="mb-0 h6">Home</p>
                                                    <p className="mb-0 badge badge-success ml-auto">Default</p>
                                                </div>
                                                <p className="small text-muted m-0">{address?.homeAddress}</p>
                                                <p className="small text-muted m-0">{address?.completeAddress}</p>
                                                {/* <p className="pt-2 m-0 text-right"><span className="small"><a href="my_address.html#"
                                                    data-toggle="modal" data-target="#exampleModal"
                                                    className="text-decoration-none text-success"><i
                                                        className="icofont-edit"></i> Edit</a></span>
                                                    <span className="small ml-3"><a href="my_address.html#" data-toggle="modal"
                                                        data-target="#Delete" className="text-decoration-none text-danger"><i
                                                            className="icofont-trash"></i> Delete</a></span>
                                                </p> */}
                                            </div>
                                        </div>
                                    </label>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>          
           
        </>
    );
}

export default Address;