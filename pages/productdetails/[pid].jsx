import { useRouter } from "next/router";
import requests from "../../agent";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSession, signIn } from "next-auth/react";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../../context/cart.slice";
import Link from "next/link";

const ProductDetails = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  const router = useRouter();
  const [post, setPost] = useState({});
  const { pid } = router.query;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    requests.get(`/posts/${pid}`).then((res) => {
      setPost(res);
    });
  }, [pid]);

  const handleBuyNow = (post) => {
    dispatch(addToCart(post));
    router.push("/cart");
  };
  // if (typeof window !== "undefined" && loading) return null;
  // if (!session) {
  //   signIn();
  // }
  return (
    <>
      <nav aria-label="breadcrumb" className="breadcrumb mb-0">
        <div className="container">
          <ol className="d-flex align-items-center mb-0 p-0">
            <li className="breadcrumb-item">
             <Link href ="/">
             <a  className="text-success">
                Home
              </a>
             </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Product details
            </li>
          </ol>
        </div>
      </nav>
      <section className="py-4 osahan-main-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="recommend-slider mb-3">
                {post.paths?.map((item, index) => (
                  <div key={index} className="osahan-slider-item">
                    <img                    
                      src={item}
                      className="img-fluid mx-auto shadow-sm rounded"
                      alt="Responsive image"
                    />
                  </div>
                ))}
              </div>
              <div className="pd-f d-flex align-items-center mb-3">
                <a
                  onClick={() => dispatch(addToCart(post))}
                  className="btn btn-warning p-3 rounded btn-block d-flex align-items-center justify-content-center mr-3 btn-lg"
                >
                  <i className="icofont-plus m-0 mr-2"></i> ADD TO CART
                </a>
                <a
                  onClick={() => handleBuyNow(post)}
                  className="btn btn-success p-3 rounded btn-block d-flex align-items-center justify-content-center btn-lg m-0"
                >
                  <i className="icofont-cart m-0 mr-2"></i> BUY NOW
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4 bg-white rounded shadow-sm">
                <div className="pt-0">
                  <h2 className="font-weight-bold">
                    {post.county} - {post.subCounty} - {post.ward}
                  </h2>
                  <p className="font-weight-light text-dark m-0 d-flex align-items-center">
                    Unit Price :{" "}
                    <b className="h6 text-dark m-0"> {post.unitPrice}/=</b>
                    <span className="badge badge-danger ml-2">
                      {post.discount} OFF
                    </span>
                  </p>
                  {/* <a href="review.html">
                    <div className="rating-wrap d-flex align-items-center mt-2">
                      <ul className="rating-stars list-unstyled">
                        <li>
                          <i className="icofont-star text-warning"></i>
                          <i className="icofont-star text-warning"></i>
                          <i className="icofont-star text-warning"></i>
                          <i className="icofont-star text-warning"></i>
                          <i className="icofont-star"></i>
                        </li>
                      </ul>
                      <p className="label-rating text-muted ml-2 small">
                        (245 Reviews)
                      </p>
                    </div>
                  </a> */}
                </div>
                <div className="pt-2">
                  <div className="row">
                    <div className="col-6">
                      <p className="font-weight-bold m-0">Delivery</p>
                      <p className="text-muted m-0">Free</p>
                    </div>
                    <div className="col-6 text-right">
                      <p className="font-weight-bold m-0">Available Quanity:</p>
                      <p className="text-muted m-0">
                        {post.quantity} {post.uom}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="details">
                  <div className="pt-3 bg-white">
                    <div className="d-flex align-items-center">
                      <div
                        className="btn-group osahan-radio btn-group-toggle"
                        data-toggle="buttons"
                      >
                        <label className="btn btn-secondary active">
                          <input
                            type="radio"
                            name="options"
                            id="option1"
                            defaultChecked
                          />
                          4 bales
                        </label>
                        <label className="btn btn-secondary">
                          <input type="radio" name="options" id="option2" /> 6
                          bales
                        </label>
                        <label className="btn btn-secondary">
                          <input type="radio" name="options" id="option3" /> 1
                          bale
                        </label>
                      </div>
                      <a className="ml-auto">
                        <form className="cart-items-number d-flex">
                          <input
                            type="button"
                            value="-"
                            className="qtyminus btn btn-success btn-sm"
                            field="quantity"
                            onClick={() => dispatch(decrementQuantity(post.id))}
                          />
                          <input
                            type="text"
                            name="quantity"
                            value={cart.find((x) => x.id == post.id)?.quantity}
                            className="qty form-control"
                          />
                          <input
                            type="button"
                            value="+"
                            className="qtyplus btn btn-success btn-sm"
                            field="quantity"
                            onClick={() => dispatch(incrementQuantity(post.id))}
                          />
                        </form>
                      </a>
                    </div>
                  </div>
                  <div className="pt-3">
                    {/* <div className="input-group mb-3 border rounded shadow-sm overflow-hidden bg-white">
                      <div className="input-group-prepend">
                        <button className="border-0 btn btn-outline-secondary text-success bg-white">
                          <i className="icofont-search"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        className="shadow-none border-0 form-control form-control-lg pl-0"
                        placeholder="Type your city (e.g Chennai, Pune)"
                        aria-label=""
                        aria-describedby="basic-addon1"
                      />
                    </div> */}
                    <p className="font-weight-bold mb-2">Product Details</p>
                    <p className="text-muted small mb-0">{post.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
