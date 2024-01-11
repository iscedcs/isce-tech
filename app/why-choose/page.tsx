import Image from "next/image";
import React from "react";

export default function WhyChoose() {
  return (
    <div>
      <div className=" p-20  ">
        <div className="text-center pb-20 ">
          <div className="text-4xl font-bold ">WHY CHOOSE ISCE TECH</div>
        </div>
        <div className="flex gap-20 justify-center">
          <div className="flex flex-col py-6 px-6  w-80  h-80 ">
            <div className=" pl-28 pb-10 "></div>
            <h1 className=" text-2xl ">
              We are building Customer Feedback intelligence
            </h1>
          </div>
          <div className="flex flex-col py-6 px-6 w-96 h-80 ">
            <div className=" pl-28 pb-10  "></div>
            <h1 className=" pb-10 ">
              Enterpret enables companies to analyze their customer feedback at
              Scale
            </h1>
            <p>
              We are Solving Complex promblems in NLP, ml-ops, analytics, and
              data visualization. we also get very competitive playing Codenames
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
