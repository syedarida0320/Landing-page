import ProductSection from "./ProductSection";

import Img1 from "../assets/images/image1.png";
import Img2 from "../assets/images/image2.png";
import Img3 from "../assets/images/image3.png";
import Img4 from "../assets/images/image4.png";

const TopSelling = () => {
  const products = [
    {
      imgSrc: Img1,
      alt: "Courage Graphic T-Shirt",
      title: "Courage Graphic T-Shirt",
      rating: "★★★★☆ 4.0/5",
      price: "$212",
      originalPrice: "$232",
      discount: "-20%",
    },
    {
      imgSrc: Img2,
      alt: "Vertical Striped Shirt",
      title: "Vertical Striped Shirt",
      rating: "★★★★★ 5.0/5",
      price: "$145",
    },
    {
      imgSrc: Img3,
      alt: "Loose Fit Bermuda Shorts",
      title: "Loose Fit Bermuda Shorts",
      rating: "★★★★★ 5.0/5",
      price: "$80",
      hidden: true,
    },
    {
      imgSrc: Img4,
      alt: "Faded Skinny Jeans",
      title: "Faded Skinny Jeans",
      rating: "★★★★★ 5.0/5",
      price: "$210",
      hidden: true,
    },
  ];

  return <ProductSection title="TOP SELLING" products={products} />;
};

export default TopSelling;
