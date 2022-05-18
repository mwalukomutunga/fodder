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
      setPosts(res);
    });
  }, []);

  if (typeof window !== "undefined" && loading) return null;
  if (!session) {
    signIn();
  }
  return (
    <section class="py-4 osahan-main-body">
      <div class="container">
        <div class="row">
          <AccountNav />
          <div class="col-lg-8 p-4 bg-white rounded shadow-sm">
            <div class="osahan-promos">
              <h4 class="mb-4 profile-title">My Listings</h4>
              {posts.map((post, index) => (
                <div key={index} class="pb-3">
                  <a
                    href="promo_details.html"
                    class="text-decoration-none text-white my-3"
                  >
                    <div class="rounded bg-success shadow-sm p-3 text-white">
                      <div class="row align-items-center">
                        <div class="col-9">
                          <div class="d-flex align-items-center">
                            <img
                              class="pp-osahan-logo"
                              src="img/FPSK LOGO.jpg"
                            />
                            <div class="brand ml-2">
                              <h5 class="m-0">{post.description}</h5>
                            </div>
                          </div>
                          <div class="mt-2 mb-3">
                            <p class="text-white m-0">
                              AVAILABLE {post.quantity} {post.discount}% OFF
                            </p>
                          </div>
                          <Link href="post">
                            <a class="btn btn-outline-light btn-sm">
                              <i class="icofont-sale-discount"></i> EDIT
                            </a>
                          </Link>
                        </div>
                        <div class="col-3 text-center">
                          <Link href={`/productdetails/${post.id}`}>
                            <a>
                              <img src={post.paths[0]} class="img-fluid" />
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
