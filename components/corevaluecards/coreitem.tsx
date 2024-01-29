import React from "react";

export default function CoreItem({ icon, title, description }: ICOREVALUE) {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-[#f15a24] to-blue-600 text-white rounded-t rounded-b-lg">
      <div className="shadow-xl w-full bg-gray-800 back mt-1 ml-1 rounded-b-lg rounded-t-none border-none text-white mb-4 sm:mb-0 p-[20px] rounded-[15px] flex flex-col gap-[10px] border">
        {icon}
        <h1 className="font-bold text-[20px]">{title}</h1>
        <p className="text-[14px]">{description}</p>
      </div>
    </div>
  );
}
