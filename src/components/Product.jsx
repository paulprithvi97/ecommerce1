import React from "react";
import Badge from "./Badge";
import Image from "./Image";
import productOne from "/src/assets/productOne.jpg";

const Product = () => {
  return (
    <div>
      <Badge badgeText={'New'}>
        <Image src={productOne} />
      </Badge>
    </div>
  );
};

export default Product;
