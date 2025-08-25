import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ title, products }) => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // check screen size
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md = 768px
    };

    checkScreen(); // run on mount
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // apply slice only on mobile
  const visibleProducts =
    isMobile && !showAll ? products.slice(0, 2) : products;

  return (
    <div className="md:my-[64px] md:mx-[100px] mx-[20px] my-[16px] p-0 text-center new-arrival-container">
      <h1 className="md:text-[48px] font-integral text-[32px] mb-[40px] tracking-normal text-center font-bold leading-[100%] new">
        {title}
      </h1>

      <div className="flex justify-center md:flex-nowrap flex-wrap gap-y-[16px] gap-x-[10px]">
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      {/* Show button on ALL screens */}
      <div className="mt-[16px] mb-[30px] text-center view-all">
        <button
          onClick={() => setShowAll(!showAll)}
          className="md:py-[16px] md:px-[54px] md:rounded-[62px] font-satoshi-medium gap-[12px] border border-[#e8e6e6] bg-white font-bold leading-[100%] cursor-pointer hover:bg-[#f0f0f0] focus:outline-none text-[14px] py-[14px] w-full md:w-auto rounded-[40px] view-all-button"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
