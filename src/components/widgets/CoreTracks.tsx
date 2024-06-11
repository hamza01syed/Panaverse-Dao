// import React from 'react'

import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
// import Quarter from "../shared/Quarter";
import QuarterBox from "../shared/QuarterBox";

const CoreTracks = () => {
    const header="Core Courses \n (common in all specializations)"
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        <div className="max-w-screen-md">
          <h4 className='text-teal-800 font-semibold text-lg mt-4'>Program of Studies</h4>
          <h2 className="text-4xl font-bold whitespace-pre-line">{header}</h2>
          <p className="mt-3 text-xl text-slate-600">
            This one-year program equips you with the skills to thrive in the
            age of Generative AI (GenAI) and cloud native computing (CN).
          </p>
          <div className="mt-2">
            <Button text="Get Now"/>
          </div>
        </div>
        {/* boxes */}
        <div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-6 max-w-screen-xl mx-auto ">
           <QuarterBox header="Quarter-1" desc="Object oriented programming using typescript" number={1} />
           <QuarterBox header="Quarter-2" desc="Build scalable AI Powered APIs using FastAPI, Postgres, Kafka, Kong, GenAI APIs like OpenAI Chat Completion APIs and Assistant APIs, and Open Source AI LLMs and deploy them using Docker containers." number={2} />
           <QuarterBox header="Quarter-3" desc="Learn to create custom AI models and GPTs using OpenAI, Azure, and Google technologies and integrate them with your Microservices." number={3} />
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;
