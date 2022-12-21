import React from 'react'
import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";

type ICounter = {
    quantity: number;
    increase: () => void;
    decrease: () => void;
  };
const Counter: React.FC<ICounter> = ({ quantity, increase, decrease }) => {
  return ( 
    <div className="border-[1px] leading-tight w-40 flex items-center rounded-sm gap-x-3">
      <button className="flex items-center justify-center border-r py-4 px-3 w-10 h-12 bg-inactive font-bold bg-gray-200" onClick={decrease}>
        <AiOutlineMinus className="text-sm" />
      </button>
      <span className="w-full h-full font-semibold focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-center">{quantity}</span>
      <button className="flex items-center justify-center border-l py-4 px-3 w-10 h-12 bg-inactive font-bold bg-gray-200" onClick={increase}>
        <AiOutlinePlus className="text-sm" />
      </button>
    </div>
  );
}
export default Counter;