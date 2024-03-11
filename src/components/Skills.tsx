import React from "react";
import { FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiSvelte } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiNuxtdotjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const row = [
  <FaAngular size={40} />,
  <FaVuejs size={40} />,
  <FaReact size={40} />,
  <SiMongodb size={40} />,
  <SiNuxtdotjs size={40} />,
  <TbBrandNextjs size={40} />,
  <FaPhp size={40} />,
  <IoLogoJavascript size={40} />,
  <IoLogoVercel size={40} />,
  <FaAws size={40} />,
  <FaFigma size={40} />,
  <FaHtml5 size={40} />,
  <FaCss3Alt size={40} />,
  <SiTypescript size={40} />,
  <SiSvelte size={40} />,
  <FaNodeJs size={40} />,
];

const Skills = () => {
  return (
    <div className=" bg-secondary-color py-5 px-10">
      <Marquee speed={100} gradient={true} gradientColor="#1E1E1E">
        {row.map((el, i) => (
          <div key={i} className="mr-20">{el}</div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;
