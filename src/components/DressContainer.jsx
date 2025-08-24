import { useState, useEffect } from "react";

import casualImage from "../assets/images/casual-image.png";
import formalImage from "../assets/images/formal-image.png";
import partyImage from "../assets/images/party-image.png";
import gymImage from "../assets/images/gym-image.png";

// --- DressCard (inline) ---
const DressCard = ({ title, image, alt, type }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-[30px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out h-[190px] w-full ${
        type === "short" ? "flex items-center" : "flex-[1_1_55%]"
      }`}
    >
      <span className="font-satoshi-bold absolute mt-[16px] ml-[24px] rounded-[10px] bg-[#ffffffd9] px-[14px] py-[6px] text-[24px] leading-[100%]">
        {title}
      </span>
      <img
        src={image}
        alt={alt}
        className={`w-full ${type === "short" ? "rounded-[20px]" : "h-full"}`}
      />
    </div>
  );
};

// --- Main DressContainer (previously DressStyle) ---
const DressContainer = () => {
  const [dressStyles, setDressStyles] = useState([]);

  useEffect(() => {
    setDressStyles([
      { title: "Casual", image: casualImage, alt: "casual dress", type: "short" },
      { title: "Formal", image: formalImage, alt: "formal dress", type: "long" },
      { title: "Party", image: partyImage, alt: "party dress", type: "long" },
      { title: "Gym", image: gymImage, alt: "gym outfit", type: "short" },
    ]);
  }, []);

  return (
    <div className="mx-[16px] my-[40px] rounded-[24px] bg-[#f0f0f0] p-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.08),0_6px_24px_rgba(0,0,0,0.06)]">
      <div className="font-integral flex justify-center px-[56px] pt-[40px] pb-[28px] text-[32px] font-bold leading-[36px] text-black">
        BROWSE BY DRESS STYLE
      </div>

      <div className="dress-grid flex flex-wrap justify-center gap-[16px]">
        {dressStyles.map((style, index) => (
          <DressCard
            key={index}
            title={style.title}
            image={style.image}
            alt={style.alt}
            type={style.type}
          />
        ))}
      </div>
    </div>
  );
};

export default DressContainer;
