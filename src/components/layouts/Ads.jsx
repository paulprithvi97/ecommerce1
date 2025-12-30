import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import adOne from "/src/assets/adOne.jpg";
import adTwo from "/src/assets/adTwo.png";
import adThree from "/src/assets/adThree.jpg";
const Ads = () => {
  return (
    <div className="py-5">
      <Container>
        <Flex className={'gap-x-5'}>
          <div className="w-1/2">
            <Image src={adOne}/>
          </div>
          <div className="w-1/2">
            <Image src={adTwo} />
            <Image src={adThree} className={'mt-10'}/>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Ads;
