import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="py-8 bg-white shadow-sm">
      <Container>
        <Flex>
          {/* <h1>header</h1> */}
          <div className="w-[40%]">
            <Link to="/">
              <Image src={logo} />
            </Link>
          </div>
          <div className="w-[60%]">
            <ul className="flex gap-5">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
      
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
