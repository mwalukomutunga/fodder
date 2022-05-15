import AppContext from "../context/Appcontext";
import { useState } from "react";

function ContextWrapper({children}){
    const [cart, setCart] = useState([]);
    return ( 
        <AppContext.Provider value ={{cart,setCart}}>
            {children}
        </AppContext.Provider>
     );
}
 
export default ContextWrapper;