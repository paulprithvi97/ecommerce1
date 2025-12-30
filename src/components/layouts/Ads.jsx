import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import adOne from "/src/assets/adOne.jpg";
import adTwo from "/src/assets/adTwo.png";
import adThree from "/src/assets/adThree.jpg";
import { Link } from "react-router-dom";
const Ads = () => {
  return (
    <div className="py-5">
      <Container>
        <Flex className={"gap-x-5"}>
          <div className="w-1/2">
            <Link to={"/"}>
              <Image src={adOne} />
            </Link>
          </div>
          <div className="w-1/2">
            <Link to={"/"}>
              <Image src={adTwo} />
            </Link>

            <Link to={"/"}>
              <Image src={adThree} className={"mt-10"} />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Ads;
