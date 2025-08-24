import { useState } from "react";

function NavBar() {
  const navItems = ["Shop", "On Sale", "New Arrivals", "Brands"];
  const [isOpen, setIsOpen] = useState(false);

  // --- NavMenu merged here ---
  function NavMenu({ items, className }) {
    return (
      <nav>
        <ul className={`list-none flex items-start text-[16px] gap-[5px] ${className || ""}`}>
          {items.map((item, index) => (
            <li key={index} className="flex justify-center items-center cursor-pointer">
              <span>{item}</span>
              {item === "Shop" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <div>
      {/* --- Banner --- */}
      <div className="md:py-0 md:px-[100px] py-[5px] px-[20px] bg-black text-white flex items-center justify-center">
        <div className="py-[7px] px-0 w-full flex">
          <p className="md:text-[14px] font-satoshi text-[12px] flex-1 text-center">
            Sign up and get 20% off to your first order.
            <a className="font-bold ml-[10px] underline underline-offset-[4px] cursor-pointer">
              Sign Up Now
            </a>
          </p>
          <button className="ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* --- Header --- */}
      <header className="md:py-[20px} md:px-[100px] py-[15px] px-[20px]">
        <div className="flex justify-between items-center h-[48px] gap-[40px]">
          {/* Left section (logo + menu toggle) */}
          <div className="flex items-center gap-[20px]">
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </svg>
              )}
            </button>

            <div className="md:text-[32px] font-bold font-integral text-[25px] translate-y-[-5px]">
              SHOP.CO
            </div>
          </div>

          {/* Center nav (desktop only) */}
          <div className="hidden md:block">
            <NavMenu items={navItems} className=" justify-center items-center font-satoshi text-[16px] flex flex-row gap-[20px]" />
          </div>

          {/* Search bar (desktop only) */}
          <div className="hidden md:flex md:h-full md:flex-1 md:bg-[#f0f0f0] md:rounded-[30px] items-center md:px-[10px] md:py-[5px] md:m-[10px]">
             <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search-icon lucide-search"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
          
            <input
              className="md:w-full md:ml-[5px] md:font-satoshi focus:outline-none"
              type="text"
              placeholder="Search for products..."
            />
          </div>

          {/* Icons (cart + profile) */}
          <div className="flex items-center gap-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="3" />
              <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
            </svg>
          </div>
        </div>

        {/* Mobile nav menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <NavMenu items={navItems} className="flex flex-col space-y-4 p-4" />
        </div>
      </header>
    </div>
  );
}

export default NavBar;
