import ProductSection from "./ProductSection";

import Frame1 from "../assets/images/Frame 1.png";
import Frame2 from "../assets/images/Frame 2.png";
import Frame3 from "../assets/images/Frame 3.png";
import Frame4 from "../assets/images/Frame 4.png";

const NewArrivals = () => {
  const products = [
    {
      imgSrc: Frame1,
      alt: "T-shirt with Tape Details",
      title: "T-shirt with Tape Details",
      rating: "★★★★☆ 4.5/5",
      price: "$120",
    },
    {
      imgSrc: Frame2,
      alt: "Skinny Fit Jeans",
      title: "Skinny Fit Jeans",
      rating: "★★★☆☆ 3.5/5",
      price: "$240",
      originalPrice: "$260",
      discount: "-20%",
    },
    {
      imgSrc: Frame3,
      alt: "Checkered Shirt",
      title: "Checkered Shirt",
      rating: "★★★★☆ 4.5/5",
      price: "$180",
      hidden: true,
    },
    {
      imgSrc: Frame4,
      alt: "Sleeve Striped T-shirt",
      title: "Sleeve Striped T-shirt",
      rating: "★★★★☆ 4.5/5",
      price: "$130",
      originalPrice: "$160",
      discount: "-30%",
      hidden: true,
    },
  ];

  return <ProductSection title="NEW ARRIVALS" products={products} />;
};

export default NewArrivals;
