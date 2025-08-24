const ProductCard = ({ imgSrc, alt, title, rating, price, originalPrice, discount, hidden }) => {
  return (
    <div
      className={`bg-[#f7f7f7] rounded-[16px] box-border flex flex-col items-start flex-1 w-[48%] p-[10px] card ${
 hidden ? "hidden" : ""
      }`}
    >
      <img
        className="w-full flex-1 object-cover rounded-[10px] mb-[8px]"
        src={imgSrc}
        alt={alt}
      />
      <div className="font-satoshi-bold text-[16px] font-bold leading-[100%] tracking-normal mb-[4px] flex flex-1">
        {title}
      </div>
      <div className="font-satoshi text-[#f5b400] font-normal leading-[100%] text-[12px] mb-[6px]">
        {rating}
      </div>
      <div className="font-satoshi-medium flex items-center font-bold gap-[3px] flex-nowrap">
        <div className="font-bold text-black text-[20px] whitespace-nowrap">
          {price}
          {originalPrice && (
            <span className="line-through text-[#999] font-bold text-[13px] whitespace-nowrap ml-2">
              {originalPrice}
            </span>
          )}
          {discount && (
            <span className="text-[#ff3333] bg-[#ffe5e5] text-[11px] px-[3px] py-[6px] rounded-[10px] whitespace-nowrap ml-2">
              {discount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
