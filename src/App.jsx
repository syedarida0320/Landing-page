import { useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import BrandContainer from "./components/BrandContainer";
import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";
import DressContainer from "./components/DressContainer";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <div className="my-0 mx-auto max-w-7xl bg-white">
      <NavBar />
      <HeroSection />
      <BrandContainer />
      <NewArrivals />
      <TopSelling />
      <DressContainer />
      <CustomerReviews />
      <Footer />
    </div>
  );
}

export default App;
