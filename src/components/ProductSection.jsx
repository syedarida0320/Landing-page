import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ title, products }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 2);

  return (
    <div className="mx-[20px] my-[16px] p-0 text-center">
      <h1 className="font-integral text-[32px] mb-[40px] tracking-normal text-center font-bold leading-[100%]">
        {title}
      </h1>

      <div className="flex justify-center flex-wrap gap-y-[16px] gap-x-[10px]">
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

      <div className="mt-[16px] mb-[30px] text-center view-all">
        <button
          onClick={() => setShowAll(!showAll)}
          className="font-satoshi-medium gap-[12px] border border-[#e8e6e6] bg-white font-bold leading-[100%] cursor-pointer hover:bg-[#f0f0f0] focus:outline-none text-[14px] py-[14px] w-full rounded-[40px]"
        >
          {showAll ? "Show Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
