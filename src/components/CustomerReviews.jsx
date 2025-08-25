import { useState, useEffect} from "react";
import ReviewCard from "./ReviewCard";

const CustomerReviews = () => {
  const reviews = [
    {
      rating: 5,
      name: "Sarah M.",
      verified: true,
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.",
    },
    {
      rating: 4,
      name: "Alex K.",
      verified: true,
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      rating: 5,
      name: "James L.",
      verified: true,
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="customer-container md:my-[80px] md:mx-[100px] py-[10px] px-[15px]">
      <div className="md:font-black md:text-[48px] md:leading-[100%] md:my-[40px] md:mx-[0px] m-[20px] flex items-center justify-between text-[32px] font-integral font-black leading-[36px] tracking-normal hover:text-[#555555] customer-title">
        OUR HAPPY CUSTOMERS
        <div className="arrow-controls cursor-pointer md:ml-[8px] hover:text-gray-600 flex gap-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-left "
            onClick={handlePrev}
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right cursor-pointer"
            onClick={handleNext}
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>

      <div className="md:justify-between md:flex-row flex-col md:m-0 m-[10px] flex items-stretch justify-center gap-[20px] w-auto reviews-container">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            rating={review.rating}
            name={review.name}
            verified={review.verified}
            text={review.text}
            isActive={isDesktop || index === activeIndex}

          />
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
