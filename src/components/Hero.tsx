import React from "react";
import EnhancedFloatingWords from "./childComponents/EnhancedFloatingWords";
import Asha from "./Asha";

const Hero = () => {
  return (
    <div
      id="hero"
      className="  min-h-screen overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 z-10">
        <EnhancedFloatingWords />
      </div>

      <div className="relative z-20 w-full flex items-center justify-center ">
        <Asha />
      </div>
    </div>
  );
};
export default Hero;
