import React from "react";
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import Container from "../Container";
import Flex from "../Flex";

const Information = () => {
  return (
    <div className="border-1 border-gray-200 py-4">
      <Container>
        <Flex className={"justify-between"}>
          <div className="flex items-center">
            <PiNumberTwoBold /> <p> Years Warranty</p>
          </div>
          <div className="flex items-center gap-3">
            <FaTruck /> <p> Free Shipping</p>
          </div>
          <div className="flex items-center gap-3">
            <IoIosRefresh /> <p> Return Policy In 30 Days</p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Information;
