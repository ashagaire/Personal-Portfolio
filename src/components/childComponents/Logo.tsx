import { Link } from "react-scroll";
import React from "react";

const Logo = () => {
  return (
    <div className="flex-shrink-0 max-w-[60px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[150px]">
      <Link
        to="asha"
        smooth={true}
        duration={500}
        offset={-80}
        className="cursor-pointer text-[#d92cf9] hover:text-purple-600"
      >
        <img
          src={require("../../assets/signature.png")}
          alt="Asha Signature"
          className="w-full h-auto"
        />
      </Link>
    </div>
  );
};
export default Logo;
