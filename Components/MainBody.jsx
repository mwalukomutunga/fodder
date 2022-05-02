import {useEffect} from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

const MainBody = () => {
const { data: session, status } = useSession()
  const loading = status === "loading";

    // useEffect(()=>{
    //  console.log(session)
    // },[session]);




    // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null

  // If no session exists, display access denied message
//   if (!session) {
//     return (
//       <h1>
//         <p> Access denied </p>
//       </h1>
//     )
//   }
    return (
        <section className="py-4 osahan-main-body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="osahan-listing">
                            <div className="d-flex align-items-center mb-3">
                                <h4>Fodder Listing</h4>
                                <div className="m-0 text-center ml-auto">
                                    <a href="listing.html#" data-toggle="modal" data-target="#exampleModal"
                                        className="btn text-muted bg-white mr-2"><i className="icofont-filter mr-1"></i> Filter</a>
                                    <a href="listing.html#" data-toggle="modal" data-target="#exampleModal"
                                        className="btn text-muted bg-white"><i className="icofont-signal mr-1"></i> Sort</a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/fodder-unsplash.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Chilli</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/listing/v1.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Kitui</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/fodder-unsplash.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Kitui</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/listing/v5.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Kitui</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/listing/v5.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Kitui</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/listing/v2.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Kitui</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/fodder-unsplash.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Kitui</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/fodder-unsplash.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Kitui</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/fodder-unsplash.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Kitui</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/fodder-unsplash.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Kitui</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/fodder-unsplash.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Kitui</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/fodder-unsplash.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Kitui</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/fodder-unsplash.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Kitui</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/fodder-unsplash.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Kitui</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/listing/v4.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Kitui</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3 mb-3">
                                    <div
                                        className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                        <div className="list-card-image">
                                            <div  className="text-dark">
                                                <div className="member-plan position-absolute"><span
                                                    className="badge m-3 badge-danger">10%</span></div>
                                                <div className="p-3">
                                                    <img src="img/fodder-unsplash.jpg" className="img-fluid item-img w-100 mb-3" />
                                                    <h6>Kitui</h6>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="price m-0 text-success">$0.8/kg</h6>
                                                        <a href="" data-toggle="collapse"
                                                            role="button" aria-expanded="false"
                                                            aria-controls="collapseExample1"
                                                            className="btn btn-success btn-sm ml-auto">+</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);
}

export default MainBody;