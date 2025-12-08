import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="py-8">
      <Container>
        <Flex className="max-w-mContainer mx-auto items-center pb-2 font-dmFont">
          <div className="flex-1 pl-8">
            <Link to="/">
              <Image src={logo} />
            </Link>
          </div>
          <ul className="flex gap-10 justify-center flex-1">
            <li>
    <Link to="/home" className="text-gray-700 hover:text-amber-900 transition-colors duration-300
    ">
      Home
    </Link>
  </li>
      <li>
    <Link to="/shop" className="text-gray-700 hover:text-amber-900 transition-colors duration-300">
      Shop
    </Link>
  </li>
  <li>
    <Link to="/about" className="text-gray-700 hover:text-amber-900 transition-colors duration-300">
      About
    </Link>
  </li>
  <li>
    <Link to="/contact" className="text-gray-700 hover:text-amber-900 transition-colors duration-300">
      Contact
    </Link>
  </li>
          </ul>
          <div className="flex-1"></div> {/* empty for balancing */}
        </Flex>
<div className="2nd_Row py-12 pl-8 bg-[#F5F5F3] flex items-center font-dmFont border-t border-b border-gray-300 justify-between">
    
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-align-start-icon lucide-text-align-start"><path d="M21 5H3"/><path d="M15 12H3"/><path d="M17 19H3"/></svg>
    <h1 className="pl-3">Shop By Category</h1>
    
   <div className="max-w-mContainer mx-auto items-center">
        <div className="items-center h-10 w-[400px] bg-white border-2 border-[#E4E4E4] rounded-md"> 
       
        <input className="border-0 outline-0 placeholder:text-[#C4C4C4] text-[14px] grow pl-3.5 pt-1.5" 
           placeholder="Search Products" type="text"
         />
        </div>
    </div>

    <div className="flex pr-30">
        <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-icon lucide-arrow-down"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
        
        <div className="cart pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
        </div>
    </div>
 
</div>


      </Container>
    </div>

    //     <div className="py-8">
    //       <Container>
    //                 <Flex className="max-w-mContainer mx-auto pb-4">
    //           <div className="w-[40%] pl-[132px]">
    //             <Link to="/">
    //               <Image src={logo} />
    //             </Link>
    //           </div>
    //           <div className=" pl-[100px]">
    //             <ul className="flex gap-10">
    //               <li>
    //                 <Link to="/">Home</Link>
    //               </li>
    //               <li>
    //                 <Link to="/about">About</Link>
    //               </li>
    //               <li>
    //                 <Link to="/contact">Contact</Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </Flex>
    //       </Container>

    // <div className="py-[30px] bg-[#F5F5F3]">
    //        <Container>
    // <div className="2ndrow">
    //  <Flex>
    //     <div className="pl-[132px]">
    //         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-align-start-icon lucide-text-align-start"><path d="M21 5H3"/><path d="M15 12H3"/><path d="M17 19H3"/></svg>
    //     </div> <h1 className="pl-5">Shop By Category</h1>

    // <div className="searchBar pl-60">
    //   <div className="py-4 pl-10 w-[400px] bg-white border-2 border-[#E4E4E4] rounded-md flex items-center justify-between">
    //     <input
    //       className="border-0 outline-0 placeholder:text-[#C4C4C4] text-[14px] grow"
    //       placeholder="Search Products"
    //       type="text"
    //     />

    //     <svg className="mr-4"
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <path d="m21 21-4.34-4.34" />
    //       <circle cx="11" cy="11" r="8" />
    //     </svg>
    //   </div>
    // </div>

    // <div className="flex items-center">
    //     <div className="userIcon pl-[400px]">
    //         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    //     </div>
    //     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down-to-line-icon lucide-arrow-down-to-line"><path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/></svg>
    //     <div className="pl-8 cartIcon">
    //           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
    //     </div>

    // </div>

    //  </Flex>

    // </div>
    //        </Container>
    // </div>

    //     </div>
  );
};

export default Header;
