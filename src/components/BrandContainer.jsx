import React, { Fragment } from "react";
import VersaceLogo from "../assets/images/versace-logo.png";
import ZaraLogo from "../assets/images/zara-logo.png";
import GucciLogo from "../assets/images/gucci-logo.png";
import PradaLogo from "../assets/images/prada-logo.png";
import CalvinKleinLogo from "../assets/images/calvin-klein-logo.png";
import { memo } from "react";

// --- BrandLogo merged here ---
const BrandLogo = memo(({ src, alt, className }) => {
  return <img className={className} src={src} alt={alt} />;
});

// --- Main BrandContainer component ---
const BrandContainer = () => {
  const brands = [
    { src: VersaceLogo, alt: "versace-logo" },
    { src: ZaraLogo, alt: "zara-logo" },
    { src: GucciLogo, alt: "gucci-logo" },
    { src: PradaLogo, alt: "prada-logo" },
    { src: CalvinKleinLogo, alt: "calvin-klein-logo" },
  ];

  return (
    <Fragment>
      <div className="bg-black py-[20px] px-[70px] hidden md:block">
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

      <div className="bg-black py-[20px] px-[16px] md:hidden">
        {/* First row (3 logos) */}
        <div className="flex justify-center gap-[20px] mb-[20px]">
          {brands.slice(0, 3).map((brand, index) => (
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
          {brands.slice(3).map((brand, index) => (
            <BrandLogo
              key={index}
              src={brand.src}
              alt={brand.alt}
              className="w-[100px] h-[26px] object-contain"
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default BrandContainer;
