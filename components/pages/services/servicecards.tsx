import { SERVICEMAIN } from "@/lib/const";
import React from "react";
import ServiceCard from "./servicecard";

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:-mt-[70px] lg:mx-[20px]">
      {SERVICEMAIN.map((card, k) => [
        <ServiceCard
          title={card.title}
          description={card.description}
          icon={card.icon}
        />,
      ])}
    </div>
  );
}
