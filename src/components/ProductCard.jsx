const ProductCard = ({ imgSrc, alt, title, rating, price, originalPrice, discount }) => {
  return (
    <div
      className={`bg-[#f7f7f7] rounded-[16px] md:p-[10px]  box-border flex flex-col items-start flex-1 w-[48%] p-[10px] card 
      }`}
    >
      <img
        className="md:mb-[15px] md:rounded-[20px] w-full flex-1 object-cover rounded-[10px] mb-[8px]"
        src={imgSrc}
        alt={alt}
      />
      <div className="font-satoshi-bold md:text-[20px] md:mb-[8px] text-[16px] font-bold leading-[100%] tracking-normal mb-[4px] flex flex-1">
        {title}
      </div>
      <div className="font-satoshi md:text-[14px] text-[#f5b400] md:mb-[15px] font-normal leading-[100%] text-[12px] mb-[6px]">
        {rating}
      </div>
      <div className="font-satoshi-medium flex items-center font-bold gap-[3px] flex-nowrap price-row">
        <div className="md:text-[24px] font-bold text-black text-[20px] whitespace-nowrap price">
          {price}
          {originalPrice && (
            <span className="md:text-[24px] line-through text-[#999] font-bold text-[13px] whitespace-nowrap ml-2 original-price">
              {originalPrice}
            </span>
          )}
          {discount && (
            <span className="md:text-[12px] md:py-[5px] md:px-[10px] md:rounded-[12px] text-[#ff3333] bg-[#ffe5e5] text-[11px] px-[3px] py-[6px] rounded-[10px] whitespace-nowrap ml-2 discount">
              {discount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
