import axios from "axios";
import { useEffect, useState } from "react";

const ProductLlist = ({requestViewProduct}) => {

    const [obj, setObj] = useState([])

    useEffect(() => {
        axios.get('http://localhost/products').then(res => {
            setObj(res.data)
            console.log(obj)
        })
    }, [])

    if(obj.length === 0) {
        return (
            <div className="text-4xl">loading.................</div>
        )
    }


    return (  
        <ul>
            {obj.map(p =>
                <li key={p.id} onClick={() => requestViewProduct(p.id)}>
                    {p.id} - {p.product} - {p.price}
                </li>    
             )}
         </ul>
    );
}
 
export default ProductLlist;