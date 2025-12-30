import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="mt-8 mb-0.5">
      <Container>
        <Flex className="max-w-mContainer mx-auto items-center pb-2 font-dmFont">
          <div className="flex-1 pl-8">
            <Link to="/">
              <Image src={logo} />
            </Link>
          </div>
          <ul className="flex gap-10 justify-center flex-1">
            <li>
              <Link
                to="/home"
                className="text-gray-700 hover:text-amber-900 transition-colors duration-300
    "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-gray-700 hover:text-amber-900 transition-colors duration-300"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-700 hover:text-amber-900 transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-amber-900 transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex-1"></div> {/* empty for balancing */}
        </Flex>
        <div className="2nd_Row py-6 pl-8 bg-[#F5F5F3] flex items-center font-dmFont border-t border-b border-gray-300 justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-text-align-start-icon lucide-text-align-start"
          >
            <path d="M21 5H3" />
            <path d="M15 12H3" />
            <path d="M17 19H3" />
          </svg>
          <h1 className="pl-3">Shop By Category</h1>

          <div className="max-w-mContainer mx-auto items-center">
            <div className="items-center h-10 w-[400px] bg-white border-2 border-[#E4E4E4] rounded-md">
              <input
                className="border-0 outline-0 placeholder:text-[#C4C4C4] text-[14px] grow pl-3.5 pt-1.5"
                placeholder="Search Products"
                type="text"
              />
            </div>
          </div>

          <div className="flex pr-30">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-user-round-icon lucide-user-round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-down-icon lucide-arrow-down"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>

            <div className="cart pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
