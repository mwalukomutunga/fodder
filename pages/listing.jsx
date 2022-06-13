import AccountNav from "../Components/AccountNav";
import { useSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import requests from "../agent";
import Post from "./post";
import Link from "next/link";

const Listing = () => {
  const [posts, setPosts] = useState([]);
  const { data: session, status } = useSession();
  const loading = status === "loading";
  
  useEffect(() => {
    requests.get("/posts").then((res) => {
      setPosts(res.slice(1, 3));
    });
    if (!session) {
      signIn();
    }
  }, [session]);

 
  return (
    <section className="py-4 osahan-main-body">
      <div className="container">
        <div className="row">
          <AccountNav />
          <div className="col-lg-8 p-4 bg-white rounded shadow-sm">
            <div className="osahan-promos">
              <h4 className="mb-4 profile-title">My Listings</h4>
              {posts.map((post, index) => (
                <div key={index} className="pb-3">
                  <a
                    href="promo_details.html"
                    className="text-decoration-none text-white my-3"
                  >
                    <div className="rounded bg-success shadow-sm p-3 text-white">
                      <div className="row align-items-center">
                        <div className="col-9">
                          <div className="d-flex align-items-center">
                            <img
                              className="pp-osahan-logo"
                              src="img/FPSK LOGO.jpg"
                            />
                            <div className="brand ml-2">
                              <h5 className="m-0">{post.description}</h5>
                            </div>
                          </div>
                          <div className="mt-2 mb-3">
                            <p className="text-white m-0">
                              AVAILABLE {post.quantity} {post.discount}% OFF
                            </p>
                          </div>
                          <Link href="post">
                            <a className="btn btn-outline-light btn-sm">
                              <i className="icofont-sale-discount"></i> EDIT
                            </a>
                          </Link>
                        </div>
                        <div className="col-3 text-center">
                          <Link href={`/productdetails/${post.id}`}>
                            <a>
                              <img src={post.paths[0]} className="img-fluid" />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
