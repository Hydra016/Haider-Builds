import React from "react";
import Button from "../libs/Button";
import Navbar from "./Navbar";
import Skills from "./Skills";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";
import ParticlesBackground from "./ParticlesBackground";
import { FaXTwitter } from "react-icons/fa6";

interface Props {
  setInit: React.Dispatch<React.SetStateAction<boolean>>;
}

const Landing = ({ setInit }: Props) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Navbar />
      <div className="flex justify-center md:mt-0 mt-5">
        <div className="md:w-4/5 md:px-20 px-5 h-full flex justify-center items-center">
          <div className="flex flex-col">
            <div className="md:text-6xl text-5xl font-black">Hey There,</div>
            <div className="md:text-8xl text-2xl font-black mt-3">
              I'M <span className="text-secondary-text-color">HAIDER</span>
            </div>
            <div className="text-3xl md:text-5xl font-black mt-3">
              A{" "}
              <span className="text-secondary-text-color">
                FULLSTACK DEVELOPER
              </span>
            </div>
            <div className="mt-3 md:text-xl">
              With nearly four years of industry experience, I am dedicated to
              transforming my clients' visionary ideas into reality.
              Specializing in the development of{" "}
              <span className="text-secondary-text-color">
                large-scale applications
              </span>
              , I bring a wealth of expertise to deliver exceptional solutions.
              My goal is to collaborate with clients, leveraging my skills and
              experience, to bring their innovative concepts to reality.
            </div>
            <div className="flex items-center mt-5">
              <div className="flex">
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/haider-mansoor-4966a220b/"
                >
                  <FaLinkedin className="mr-2" />
                </Link>
                <Link target="_blank" href="https://github.com/Hydra016">
                  <FaGithub className="mr-2" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/fifaholic247/"
                >
                  <FaInstagram className="mr-2" />
                </Link>
                <Link target="_blank" href="https://twitter.com/HaiderMansoor8">
                  <FaXTwitter className="mr-2" />
                </Link>
              </div>
              <Link
                href={
                  "https://drive.google.com/file/d/1sN5S1QPORuh49rF5NaWz5F7YFsSLdS3m/view?usp=sharing"
                }
                target="_blank"
              >
                <Button
                  title="My CV"
                  icon={<FaExternalLinkAlt size={15} className="ml-5" />}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Landing;
