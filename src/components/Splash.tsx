import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Splash = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <InfinitySpin width="200" color="#A6A001" />
    </div>
  );
};

export default Splash;
