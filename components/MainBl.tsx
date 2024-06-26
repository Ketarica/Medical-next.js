import Image from "next/image";
import React from "react";
// const PointerDown = [
//   <Image 
//   src= "/assets/PointerDown.png"
//   alt="RectYellow"
//   width={425}
//   height={54}
// />
// ]
const MainBl = () => {
  return (
    <section className="flex">
       <div className="z-[0]"> 
          <div className="absolute">
          {/* <p className="z-[1] text-[#01457A] font-bold text-4xl px-[46px] mt-[18px] decoration-solid"> */}
          <p className="z-[1] text-[#01457A] font-bold text-[16px] px-[46px] decoration-solid sm:text-[24px]">
            ХОБЛ: мифы и реальность
          </p>
            </div>
   <Image 
      src= "/assets/DecorWhite.png"
      alt="whiteThing"
      width={1335}
      height={110}
      className= "sm:max-2xl:w-auto"
    />
        </div>

   </section>
  );
};
export default MainBl;
