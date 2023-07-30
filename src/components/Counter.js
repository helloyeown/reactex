import { useState } from "react";

const Counter = () => {

    console.log("render.......................");

    const [num, setNum] = useState(1);		// 초기화 값
    // num의 상태가 바뀔 때마다 리렌더링

    const handleClick = (amount) => {
        setNum(num + amount)
        console.log("click", num)
    }

    return (  
        <div className=" bg-pink-200">
            <div className="text-5xl text-white">1</div>
            <button className=" bg-slate-300 text-zinc-700 font-bold"
            onClick={() => handleClick(1)}>+</button>
            <button className=" bg-slate-300 text-zinc-700 font-bold"
            onClick={() => handleClick(-1)}>-</button>
        </div>
    );
}
 
export default Counter;