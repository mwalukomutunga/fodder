import AppContext from "../context/Appcontext";
import { useContext } from "react";
function AddCart() {
  const { cart, setCart } = AppContext();
  const test ="new";
  return (
    <a
      onClick={() => setCart({...cart,test})}
      href=""
      data-toggle="collapse"
      role="button"
      aria-expanded="false"
      aria-controls="collapseExample1"
      className="btn btn-success btn-sm ml-auto"
    >
      +
    </a>
  );
}

export default AddCart;
