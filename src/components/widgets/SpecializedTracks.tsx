"use client";
// import React from 'react'
import Wrapper from "@/components/shared/Wrapper";
import QuarterBox from "../shared/QuarterBox";
import tuition from "@/assets/images/tuition1.png";
import tutor from "@/assets/images/tuition2.png";
import tutor3 from "@/assets/images/tuition3.png"
import tutor4 from "@/assets/images/tuition4.png"
import tutor5 from "@/assets/images/tuition5.jpg"
import tutor6 from "@/assets/images/tuition3.png"
import Image from "next/image";
import { useState } from "react";


export const data=[
  {
    slug:"wmd",
    header: "Web-3 and Blockchain program",
    desciption:"Training these models requires an immense amount of high-quality data, often exceeding petabytes. Compiling, cleaning, and structuring this data is a monumental task.",
    image:tuition,
    quarters:[
      {
        number:4,
        header:"Quarter-4",
        description:"Training LLMs demands incredible computational resources, like high-performance GPUs and specialised AI hardware"
      },
      {
        number:5,
        header:"Quarter-5",
        description:"Training LLMs demands incredible computational resources, like high-performance GPUs and specialised AI hardware"
      }
    ]
  },
  {
    slug:"aia",
    header: "Artificial Intelligence program",
    desciption:"Designing the LLMs architecture involves complex decisions about parameters, layers, and attention mechanisms",
    image:tutor,
    quarters:[
      {
        number:4,
        header:"Quarter-4",
        description:"The rapid emergence of Gen AI-powered technologies and the evolving demand for skills necessitate extensive and timely professional training."
      },
      {
        number:5,
        header:"Quarter-5",
        description:"This revolution is pivotal for technology and job landscapes, making it essential knowledge in fast-evolving tech cycles."
      }
    ]
  }
  ,
  {
    slug:"aib",
    header: "Artificial Intelligence program",
    desciption:"Designing the LLMs architecture involves complex decisions about parameters, layers, and attention mechanisms",
    image:tutor3,
    quarters:[
      {
        number:4,
        header:"Quarter-4",
        description:"The rapid emergence of Gen AI-powered technologies and the evolving demand for skills necessitate extensive and timely professional training."
      },
      {
        number:5,
        header:"Quarter-5",
        description:"This revolution is pivotal for technology and job landscapes, making it essential knowledge in fast-evolving tech cycles."
      }
    ]
  }
  ,
  {
    slug:"aic",
    header: "Artificial Intelligence program",
    desciption:"Designing the LLMs architecture involves complex decisions about parameters, layers, and attention mechanisms",
    image:tutor4,
    quarters:[
      {
        number:4,
        header:"Quarter-4",
        description:"The rapid emergence of Gen AI-powered technologies and the evolving demand for skills necessitate extensive and timely professional training."
      },
      {
        number:5,
        header:"Quarter-5",
        description:"This revolution is pivotal for technology and job landscapes, making it essential knowledge in fast-evolving tech cycles."
      }
    ]
  }
  ,
  {
    slug:"aid",
    header: "Artificial Intelligence program",
    desciption:"Designing the LLMs architecture involves complex decisions about parameters, layers, and attention mechanisms",
    image:tutor5,
    quarters:[
      {
        number:4,
        header:"Quarter-4",
        description:"The rapid emergence of Gen AI-powered technologies and the evolving demand for skills necessitate extensive and timely professional training."
      },
      {
        number:5,
        header:"Quarter-5",
        description:"This revolution is pivotal for technology and job landscapes, making it essential knowledge in fast-evolving tech cycles."
      }
    ]
  }
  ,
  {
    slug:"aie",
    header: "Artificial Intelligence program",
    desciption:"Designing the LLMs architecture involves complex decisions about parameters, layers, and attention mechanisms",
    image:tutor6,
    quarters:[
      {
        number:4,
        header:"Quarter-4",
        description:"The rapid emergence of Gen AI-powered technologies and the evolving demand for skills necessitate extensive and timely professional training."
      },
      {
        number:5,
        header:"Quarter-5",
        description:"This revolution is pivotal for technology and job landscapes, making it essential knowledge in fast-evolving tech cycles."
      }
    ]
  }
  ,
  {
    slug:"aif",
    header: "Artificial Intelligence program",
    desciption:"Designing the LLMs architecture involves complex decisions about parameters, layers, and attention mechanisms",
    image:tutor,
    quarters:[
      {
        number:4,
        header:"Quarter-4",
        description:"The rapid emergence of Gen AI-powered technologies and the evolving demand for skills necessitate extensive and timely professional training."
      },
      {
        number:5,
        header:"Quarter-5",
        description:"This revolution is pivotal for technology and job landscapes, making it essential knowledge in fast-evolving tech cycles."
      }
    ]
  }
  
  
]

const SpecializedTracks = () => {
  const [selectedItem, setSelectedItem] = useState("wmd")
  const selectedItemData=data.find((item)=>item.slug===selectedItem)
  return (
    <section>
      <Wrapper>
        {/* header  */}
        <div>
          <h2 className="font-bold text-5xl whitespace-pre-line">
            Specialized Tracks
          </h2>
          <p className="mt-2 text-slate-600 max-w-screen-sm">
            The Cloud Native Applied Generative AI Certification program equips
            you to create leading-edge Cloud Native AI solutions using a
            comprehensive cloud-native and AI platform.
          </p>
        </div>
        <div className="mt-10 flex flex-col-reverse gap-x-8 lg:flex-row gap-y-8">
          {/* content left   */}
          <div className="shadow-xl sticky top-28 self-start rounded-xl border border-slate-800 basis-8/12 py-8 px-8">
            <h4 className="text-teal-700 font-medium text-lg">
              Specialized Program
            </h4>
            <h3 className="text-xl font-semibold">
             {selectedItemData?.header}
            </h3>
            <p className="text-lg text-slate-600 mt-3">
            {selectedItemData?.desciption}
            </p>
            <button className="text-teal-700 text-xl mt-4 underline">
              Learn more
            </button>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 ">
            {
              selectedItemData?.quarters.map((item)=>(
                <QuarterBox
                key={item.number}
                header={item.header}
                desc={item.description}
                number={item.number}
                haveBorder={false}
              />
              ))
            }
              
             
            </div>
          </div>
          {/* content right  */}
          <div className="py-6 px-4 space-y-4  bg-slate-100 basis-4/12">
            {
              data.map((item,i)=>(
                <div onClick={()=>setSelectedItem(item.slug)} className="flex gap-x-4 cursor-pointer items-center" key={item.slug}>
                <div>
                  {/* <div className="w-20 h-16 rounded bg-red-300"></div> */}
                  <Image src={item.image} alt={item.header} className={"h-24 w-48 object-cover rounded-md"}/>
                </div>
                <div>
                  <h4 className="text-teal-600 font-medium">
                    Specialized Program
                  </h4>
                  <h3 className="text-xl font-semibold ">
                  {item.header}
                  </h3>
                </div>
              </div>
              
              ))
            }
          
            
            {/* underline  */}
          </div>
        </div>
       
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
