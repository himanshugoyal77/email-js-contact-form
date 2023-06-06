import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/93577-contact.json";

const LottieSection = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice",
  //   },
  // };
  return (
    <div className="mx-2 my-4 sm:ml-12 sm:basis-1/2 flex flex-col justify-center items-center gap-3 sm:gap-20">
      <h1 className="font-bold text-lg text-primaryColor sm:text-[30px]">
        HOW CAN I HELP YOU?
      </h1>
      <Lottie animationData={animationData} autoPlay="false" loop={"false"} />
    </div>
  );
};

export default LottieSection;
