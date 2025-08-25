const ReviewCard = ({ rating, name, verified, text, isActive }) => {
  if (!isActive) return null; 

  return (
    <div className=" md:rounded-[16px] md:py-[28px] md:px-[32px]  bg-[#f7f7f7]  flex flex-col justify-start rounded-[20px] flex-1 p-[24px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#e4dcdc] review-card">
      <div className="customer-rating md:text-[18px] mb-[12px] text-[28px] text-[#f5b400]">
        {"★".repeat(rating)}{"☆".repeat(5 - rating)}
      </div>
      <div className="name md:text-[20px] mb-[10px] flex items-center gap-[6px] text-[16px] font-satoshi-bold leading-[22px] tracking-normal">
        {name}
        {verified && <span className="verified text-[14px] text-green-600">✔️</span>}
      </div>
      <p className="review-text md:text-[16px] md:leading-[22px] m-0 text-[14px] leading-[20px] font-satoshi font-normal text-[#555]">
        {text}
      </p>
    </div>
  );
};

export default ReviewCard;
