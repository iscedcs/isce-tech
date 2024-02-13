import React from "react";

export default function ServiceCard({
  icon,
  title,
  description,
}: ISERVICEMAIN) {
  return (
    <div className="group bg-white flex flex-col gap-[20px] items-center text-center  rounded-md p-[20px]">
      {icon && (
        <div className="relative bg-black p-[20px] rounded-[100px] w-[80px] text-white">
          <div className="transition duration-75 ease-in-out group-hover:scale-110">
            {icon}
          </div>
        </div>
      )}
      <h1 className="font-bold  text-[20px]">{title}</h1>
      <p className="text-[14px]">{description}</p>
    </div>
  );
}
