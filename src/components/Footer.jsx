import { useState } from "react";
import twitterIcon from "../assets/images/twitter-icon.png";
import facebookIcon from "../assets/images/facebook-icon.png";
import instagramIcon from "../assets/images/instagram-icon.png";
import githubIcon from "../assets/images/github.png";
import visa from "../assets/images/Visa.png";
import mastercard from "../assets/images/Mastercard.png";
import paypal from "../assets/images/Paypal.png";
import applePay from "../assets/images/apple-pay.png";
import gpay from "../assets/images/G-Pay.png";

// --- Newsletter ---
const Newsletter = ({ onSubscribe }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    onSubscribe(email);
    setEmail("");
  };

  return (
    <div className="update md:py-[43px] md:px-[64px] md:mx-[100px] md:my-0 relative z-[1] m-[17px] flex flex-col items-center gap-[40px] rounded-[20px] bg-black py-[32px] px-[35px] justify-between md:flex-row md:gap-[212px]">
      <div className="update-text md:text-[40px] md:leading-[1.3]  font-integral text-[32px] p-0 font-bold leading-[35px] tracking-normal text-white">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </div>

      <div className="update-email flex flex-col md:gap-[14px] gap-[12px]">
        <form
          onSubmit={handleSubmit}
          className="email font-satoshi font-normal leading-[100%] flex items-center gap-[12px] rounded-[62px] bg-white py-[12px] px-[16px]"
        >
          <span className="email-icon text-[16px] text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="#4f4f4f"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
          </span>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" w-[250px] border-none text-[14px] font-satoshi outline-none focus:outline-none"
          />
        </form>

        <div className="subscribe-button">
          <button
            type="button"
            onClick={handleSubmit}
            className="md:px-0 md:py-[10px] md:content-center md:text-[16px] font-satoshi-medium flex w-full cursor-pointer justify-center gap-[14px] rounded-[62px] bg-white py-[12px] px-[16px] border-none text-[14px] font-medium focus:outline-none"
          >
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

// --- FooterSection ---
const FooterSection = ({ title, items }) => {
  return (
    <div className={`footer-section md:gap-[12px] md:text-[14px] md:text-[#555] mb-[30px] flex flex-col`}>
      <h4 className="md:leading-[18px] md:text-[16px] md:tracking-[3px] md:mb-[10px] mb-[8px] text-[14px] font-bold uppercase tracking-[2px] text-black font-satoshi-medium">
        {title}
      </h4>
      {items.map((item, idx) => (
        <p
          key={idx}
          className="font-normal md:leading-[16px] md:tracking-normal cursor-pointer font-satoshi text-[14px] leading-[20px] text-[#555]"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

// --- Main Footer ---
const Footer = () => {
  const handleSubscribe = (email) => {
    console.log("Subscribed with:", email);
  };

  return (
    <div className="contact-container flex w-full flex-col justify-center bg-white">
      <Newsletter onSubscribe={handleSubscribe} />
      <div className="contact-help md:pt-[140px] md:px-[100px] md:pb-[20px] md:w-auto md:mt-[-80px] relative z-0 mt-[-100px] bg-[#f0f0f0] px-[16px] pb-[30px] pt-[100px] font-satoshi">
        <div className="footer flex md:justify-between md:mb-[40px] flex-col md:flex-row items-start gap-[30px]">
          {/* Brand */}
          <div className="brand footer-section mb-[30px] flex flex-col">
            <h2 className="text-black md:leading-[100%]  md:text-[30px]  mb-[10px] text-[28px] font-bold font-integral">SHOP.CO</h2>
            <p className="md:max-w-[240px] md:mb-[20px] text-[14px] leading-[22px] text-[#555] font-satoshi">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="social-icons mt-[10px] flex gap-[12px]">
              <a href="https://x.com"><img className="h-[24px] w-[24px]" src={twitterIcon} alt="Twitter" /></a>
              <a href="https://facebook.com"><img className="h-[24px] w-[24px]" src={facebookIcon} alt="Facebook" /></a>
              <a href="https://instagram.com"><img className="h-[24px] w-[24px]" src={instagramIcon} alt="Instagram" /></a>
              <a href="https://github.com"><img className="h-[24px] w-[24px]" src={githubIcon} alt="GitHub" /></a>
            </div>
          </div>

          {/* Mobile footer (hidden on md+) */}
          <div className="first-footer md:hidden flex justify-start gap-[89px]">
            <FooterSection title="Company" items={["About", "Features", "Works", "Career"]} />
            <FooterSection title="Help" items={["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"]} />
          </div>

          <div className="second-footer md:hidden flex justify-start gap-[59px]">
            <FooterSection title="FAQ" items={["Account", "Manage Deliveries", "Orders", "Payments"]} />
            <FooterSection title="Resources" items={["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"]} />
          </div>

          {/* Large screen footer (hidden on small screens) */}
          <div className="large-footer hidden md:flex gap-[100px]">
            <FooterSection title="Company" items={["About", "Features", "Works", "Career"]} />
            <FooterSection title="Help" items={["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"]} />
            <FooterSection title="FAQ" items={["Account", "Manage Deliveries", "Orders", "Payments"]} />
            <FooterSection title="Resources" items={["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"]} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom mt-[20px] flex flex-col md:flex-row items-center justify-between gap-[10px] border-t border-t-[#dddddd] font-satoshi leading-[100%] tracking-normal pt-[20px] text-[14px] font-normal text-[#999]">
          <p>Shop.co &copy; 2000-2023, All Rights Reserved</p>
          <div className="payment-icons md:text-[18px] md:ml-[12px] flex flex-row justify-center">
            <a href="#"><img src={visa} alt="Visa" className="ml-[12px]" /></a>
            <a href="https://b2b.mastercard.com/membership-login/"><img src={mastercard} alt="Mastercard" className="ml-[12px]" /></a>
            <a href="https://www.paypal.com"><img src={paypal} alt="Paypal" className="ml-[12px]" /></a>
            <a href="#"><img src={applePay} alt="Apple Pay" className="ml-[12px]" /></a>
            <a href="#"><img src={gpay} alt="Google Pay" className="ml-[12px]" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

