import React from 'react'
import { AiOutlineMinus,AiOutlinePlus } from "react-icons/ai";

type ICounter = {
    quantity: number;
    increase: () => void;
    decrease: () => void;
  };
const Counter: React.FC<ICounter> = ({ quantity, increase, decrease }) => {
  return ( 
    <p className="border-[1px] leading-tight w-40 flex items-center rounded-sm gap-x-3">
      <span className="flex items-center justify-center border-r py-4 px-3 w-10 h-12 left-0 mr-3 bg-inactive font-bold" onClick={decrease}>
        <AiOutlineMinus className="text-sm" />
      </span>
      <span className="w-full h-full font-semibold focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-center">{quantity}</span>
      <span className="flex items-center justify-center border-r py-4 px-3 w-10 h-12 left-0 mr-3 bg-inactive font-bold" onClick={increase}>
        <AiOutlinePlus className="text-sm" />
      </span>
    </p>
  );
}
export default Counter;