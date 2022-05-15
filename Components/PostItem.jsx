import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../context/cart.slice";
const PostItem = ({post}) => {
    const dispatch = useDispatch();
    return ( 

        <div className="col-6 col-md-3 mb-3">
        <div
            className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
            <div className="list-card-image">
             <Link href={`/productdetails/${post.id}`}>
              <div  className="text-dark">
                    <div className="member-plan position-absolute"><span
                        className="badge m-3 badge-danger">{post.discount}%</span></div>
                    <div className="p-3">
                        <img src={post.paths?.[0]}  className="img-fluid item-img w-100 mb-3" width={40} height={40} />
                        <h6>{post.county} - {post.subCounty} - {post.ward}</h6>
                        <div className="d-flex align-items-center">
                            <h6 className="price m-0 text-success">Available - {post.quantity} {post.uom}</h6>
                            <a   onClick={() => dispatch(addToCart(post))} data-toggle="collapse"
                                role="button" aria-expanded="false"
                                aria-controls="collapseExample1"
                                className="btn btn-success btn-sm ml-auto">+</a>
                        </div>
                    </div>
                </div>
              </Link>
            </div>
        </div>
    </div>
     );
}
 
export default PostItem;