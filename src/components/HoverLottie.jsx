import React, { useRef } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/animation/Aniki Hamster.json"
import img1 from "../assets/img1.png"
const HoverLottie = () => {
  const lottieRef = useRef();

  return (
    <div
    onMouseEnter={() => lottieRef.current.pause()}
    onMouseLeave={() => lottieRef.current.play()}
    
    className="bg-white w-full h-[10rem] mt-5 border-0 rounded-xl flex flex-row items-center justify-center pr-5"
  >
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={true}
      autoplay={true}
    //   style={{ width: "10%", height: "100%" }}
      className=" w-[10%] h-[100%] "
    />
    <div className="w-[90%] shadow-bright-red border-0 rounded-xl overflow-hidden  h-[90%] inset-shadow-left-right p-2">
        <div className="h-full w-[2000px] overflow-hidden   flex flex-row ">
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            <div className="h-[5rem] w-[10rem]">
            <img src={img1} className="h-full" alt="" />
            </div>
            

        </div>
    </div>
  </div>
  );
};

export default HoverLottie;
