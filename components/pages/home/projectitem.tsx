import { PROJECT_ITEM } from "@/lib/const";
import React from "react";
import Projectcomp from "./projectcomp";

export default function Projectitem() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {PROJECT_ITEM.map((project, k) => (
        <Projectcomp
          key={k}
          image={project.image}
          title={project.title}
          description={project.description}
          weblink={project.weblink}
          figlink={project.figlink}
        />
      ))}
    </div>
  );
}
