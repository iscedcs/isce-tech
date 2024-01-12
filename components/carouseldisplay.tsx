import React from "react";

export default function HeaderCarouselDisplay({
  header,
  content,
  link,
  className,
  buttonTitle,
}: ICAROUSELDISPLAY) {
  return (
    <div className={` w-full h-screen bg-cover bg-center ${className}`}>
      <div className="w-full h-screen bg-gradient-to-t from-[#000000] to-[#13121200] opacity-100"></div>
      <div className="w-full text-white absolute bottom-0 p-[40px] flex flex-col gap-5">
        <h1 className="font-bold text-[50px] lg:text-[100px]">{header}</h1>
        <p className="w-[80%] lg:w-[60%]">{content}</p>
        <a className="" href={link}>
          <button className="transition-all duration-[0.3s] hover:bg-black hover:text-white text-black bg-white py-3 px-5">
            {buttonTitle}
          </button>
        </a>
      </div>
    </div>
  );
}
