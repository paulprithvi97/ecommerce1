import React from "react";
import Banner from "../layouts/Banner";
import { Info } from "lucide";
import Information from "../layouts/Information";
import Ads from "../layouts/Ads";
import NewArrival from "../layouts/NewArrival";


const Home = () => {
  return (
    <>
      <Banner />
      <Information />
      <Ads />
      <NewArrival />
    </>
  );
};

export default Home;
