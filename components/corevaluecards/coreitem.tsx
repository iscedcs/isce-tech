import React from "react";

export default function CoreItem({ icon, title, description }: ICOREVALUE) {
  return (
    <div className="shadow-xl p-[20px] rounded-[15px] flex flex-col gap-[10px] border">
      {icon}
      <h1 className="font-bold text-[20px]">{title}</h1>
      <p className="text-[14px]">{description}</p>
    </div>
  );
}
