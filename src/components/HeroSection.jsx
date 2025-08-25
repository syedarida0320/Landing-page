import React,{ useEffect, useState } from "react";
// --- Small reusable component: StatItem ---
const StatItem = ({ number, text, large }) => {
  return (
    <div className={`md:mt-[30px] flex flex-col ${large ? "text-left" : "text-center"}`}>
      <span
        className={`font-bold font-satoshi leading:[100%] tracking-normal py-[5px] px-0 ${
          large ? "text-[40px]" : "text-[24px]"
        } leading-[28px]`}
      >
        {number}
      </span>
      <span
        className={`font-satoshi text-[#555] ${
          large ? " text-[16px] leading-[22px]" : "text-[12px]"
        } leading-[20px]`}
      >
        {text}
      </span>
    </div>
  );
};

// --- HeroText ---
const HeroText = () => {
  return (
    <div className=" flex flex-col gap-[12px]">
      <h1 className="font-integral md:text-[64px]  md:leading-[64px] md:tracking-normal font-bold text-[38px] leading-[34px] tracking-[1.5px] [word-spacing:1px] ">
        FIND CLOTHES THAT MATCHES YOUR STYLE
      </h1>
      <p className="md:text-[16px] md:my-[32px] font-satoshi text-[14px] leading-[20px]">
        Browse through our diverse range of meticulously crafted garments,
        designed to bring out your individuality and cater to your sense of style.
      </p>
      <div>
        <button className="md:inline-block font-satoshi-medium cursor-pointer focus:outline-none bg-black text-white py-[16px] px-[64px] rounded-[30px] block text-center">
          Shop Now
        </button>
      </div>
    </div>
  );
};

// --- HeroStats ---
const HeroStats = () => {
  const stats = [
    { number: "200+", text: "International Brands" },
    { number: "2,000+", text: "High-Quality Products" },
    { number: "30,000+", text: "Happy Customers" },
  ];

  return (
    <>
      {/* Large Screen */}
      <ul className="hidden md:flex md:mt-[30px] md:p-0">
        {stats.map((stat, idx) => (
          <React.Fragment key={idx}>
            <li className="min-w-[141px]">
              <StatItem number={stat.number} text={stat.text} large={true} />
            </li>
            {idx < stats.length - 1 && (
              <li className="w-[0.1px] bg-black my-0 mx-[35px] opacity-10"></li>
            )}
          </React.Fragment>
        ))}
      </ul>

      {/* Small Screen */}
      <ul className=" list-none flex flex-col gap-[20px] mt-[30px] py-0 px-[46px] md:hidden">
        <li className="min-w-auto flex justify-center gap-[35px] two-stats-box">
          <StatItem number="200+" text="International Brands" large={false} />
          <div className="w-[0.1px] bg-black opacity-10 vertical-line"></div>
          <StatItem number="2,000+" text="High-Quality Products" large={false} />
        </li>
        <li className="self-center small-last-stats-box">
          <StatItem number="30,000+" text="Happy Customers" large={false} />
        </li>
      </ul>
    </>
  );
};

// --- HeroImage ---
const HeroImage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="md:ml-[30px] md:z-[1] md:w-[50%] w-full h-[490px] relative image-container">
      <img
        src="main-image.jpg"
        alt="Hero"
        className={`md:transform translate-x-[5%] md:translate-y-[-5%] absolute md:mr-0 md:w-[490px] md:pt-[42px] md:pr-0 md:pb-0 md:pl-[20px] mb-0 w-[119%] mt-0 mr-[-33px] p-0 overflow-hidden transition-opacity duration-100 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src="vector-1.png"
        alt="Vector 1"
        className="absolute md:left-[40px] md:top-[230px] left-0 top-[98px] vector-1"
      />
      <img
        src="vector-2.png"
        alt="Vector 2"
        className="absolute md:right-[-10px] md:top-[100px] right-3 -top-6 w-[76px]"
      />
    </div>
  );
};

// --- Main HeroSection ---
const HeroSection = () => {
  return (
    <div className=" md:py-0 md:px-[100px] flex py-0 px-[20px] md:flex-row flex-col overflow-hidden bg-[#f2f0f1] hero-section">
      <div className="md:w-[50%] md:py-[40px] md:px-0 block w-full py-[40px] px-0 info-container">
        <HeroText />
        <HeroStats />
      </div>
      <HeroImage />
    </div>
  );
};

export default HeroSection;
