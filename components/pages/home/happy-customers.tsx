import CarouselReview from "./carouselReview";

export default function HappyCustomers() {
	return (
    <div className="text-center text-white px-[20px] lg:px-[100px] pt-[40px] bg-gradient-to-br from-[#000] to-[#0e0c0c]">
      <h1 className="lg:text-[60px] text-[30px] text-center font-bold">
        Clent Reviews
      </h1>
      <CarouselReview />
    </div>
  );
}
