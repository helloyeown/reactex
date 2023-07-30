import { useState } from "react";

const Counter2 = () => {

    console.log("render......................")

    const [obj, setObj] = useState({num: 1})


    return (  
        <div>
			{obj.num}
			<button onClick={() => {
				obj.num += 1;
				console.log(obj.num);
                console.log(obj);

				setObj({...obj});

			}}>INC</button>
        </div>
    );
}
 
export default Counter2;