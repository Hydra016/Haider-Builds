import React from "react";
import Button from "../libs/Button";

const Landing = () => {
  return (
    <div className="flex flex-col justify-between md:mt-0 mt-5">
      <div className="md:w-2/5 md:px-20 px-5 h-full flex items-center">
        <div className="flex flex-col">
          <div className="text-xl font-black">Hey There,</div>
          <div className="text-6xl font-black mt-3">
            I'M <span className="text-secondary-text-color">HAIDER</span>
          </div>
          <div className="text-3xl md:text-5xl font-black mt-3">
            A{" "}
            <span className="text-secondary-text-color">
              FULLSTACK DEVELOPER
            </span>
          </div>
          <div className="mt-3">
            With nearly four years of industry experience, I am dedicated to
            transforming my clients' visionary ideas into reality. Specializing
            in the development of{" "}
            <span className="text-secondary-text-color">
              large-scale applications
            </span>
            , I bring a wealth of expertise to deliver exceptional solutions. My
            goal is to collaborate with clients, leveraging my skills and
            experience, to bring their innovative concepts to reality.
          </div>
          <div className="mt-10">
            <Button title="About Me" location="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
