import { useState } from "react";
import ProductLlist from "./ProductList";

const Kiosk = () => {

    const [target, setTarget] = useState({pno:0})
    const [wanted, setWanted] = useState(null)

    const requestViewProduct = (id) => {
        console.log("requestViewProduct " + id)
        setTarget({pno:id})
    }

    const requestBuy = (product) => {
        console.log("requestBuy")
        console.log(product)
        setWanted(product)
    }




    return (  
       <div>
            <ProductLlist requestViewProduct={requestViewProduct}></ProductLlist>
       </div>
    );
}
 
export default Kiosk;