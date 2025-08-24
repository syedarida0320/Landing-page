import { useState, useEffect } from "react";

import VersaceLogo from "../assets/images/versace-logo.png";
import ZaraLogo from "../assets/images/zara-logo.png";
import GucciLogo from "../assets/images/gucci-logo.png";
import PradaLogo from "../assets/images/prada-logo.png";
import CalvinKleinLogo from "../assets/images/calvin-klein-logo.png";

// --- BrandLogo merged here ---
const BrandLogo = ({ src, alt, className }) => {
  return <img className={className} src={src} alt={alt} />;
};

// --- Main BrandContainer component ---
const BrandContainer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const brands = [
    { src: VersaceLogo, alt: "versace-logo" },
    { src: ZaraLogo, alt: "zara-logo" },
    { src: GucciLogo, alt: "gucci-logo" },
    { src: PradaLogo, alt: "prada-logo" },
    { src: CalvinKleinLogo, alt: "calvin-klein-logo" },
  ];

  if (!isMobile) {
    return (
      <div className="bg-black py-[20px] px-[70px] main-container-2">
        <ul className="gap-[30px] flex flex-wrap justify-center items-center m-0 p-0 list-none">
          {brands.map((brand, index) => (
            <li key={index} className="p-[10px] brand-logo">
              <BrandLogo
                src={brand.src}
                alt={brand.alt}
                className="max-w-full h-auto block"
              />
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    const firstRow = brands.slice(0, 3);
    const secondRow = brands.slice(3);

    return (
      <div className="bg-black py-[20px] px-[16px] mobile-container-2">
        {/* First row (3 logos) */}
        <div className="flex justify-center gap-[20px] mb-[20px]">
          {firstRow.map((brand, index) => (
            <BrandLogo
              key={index}
              src={brand.src}
              alt={brand.alt}
              className="w-[100px] h-[26px] object-contain"
            />
          ))}
        </div>

        {/* Second row (2 logos centered) */}
        <div className="flex justify-center gap-[20px]">
          {secondRow.map((brand, index) => (
            <BrandLogo
              key={index}
              src={brand.src}
              alt={brand.alt}
              className="w-[100px] h-[26px] object-contain"
            />
          ))}
        </div>
      </div>
    );
  }
};

export default BrandContainer;
