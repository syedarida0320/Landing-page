const ReviewCard = ({ rating, name, verified, text, isActive }) => {
  if (!isActive) return null; 

  return (
    <div className="review-card bg-[#f7f7f7] flex flex-col justify-start rounded-[20px] flex-1 p-[24px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#e4dcdc]">
      <div className="customer-rating mb-[12px] text-[28px] text-[#f5b400]">
        {rating}
      </div>
      <div className="name mb-[10px] flex items-center gap-[6px] text-[16px] font-satoshi-bold leading-[22px] tracking-normal">
        {name}
        {verified && <span className="verified text-[14px] text-green-600">✔️</span>}
      </div>
      <p className="review-text m-0 text-[14px] leading-[20px] font-satoshi font-normal text-[#555]">
        {text}
      </p>
    </div>
  );
};

export default ReviewCard;
