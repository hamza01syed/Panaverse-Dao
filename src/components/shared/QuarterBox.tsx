import { FC } from "react";

// import React from 'react'
interface Iprops{
    header:string;
    desc:string;
    number:number;
    haveBorder?:boolean;
}

const QuarterBox:FC<Iprops> = ({header,desc,number,haveBorder=true}) => {
  return (
    <div className= {` rounded-md flex-1 px-8 flex flex-col justify-center relative py-12 ${haveBorder?"border":""} `}>
    <h4 className="font-bold text-lg whitespace-pre-line">{header}</h4>
    <p className="mt-2 text-slate-600">{desc}</p>
    <div className="absolute -top-10 right-10 text-[157px] font-bold -z-10 text-gray-200">{number}</div>
</div>
  )
}

export default QuarterBox