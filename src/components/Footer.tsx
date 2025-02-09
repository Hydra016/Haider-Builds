import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-secondary-color bg-[#27272a] w-full bg-secondary-color items-center">
      <div className="grid grid-cols-2 md:flex justify-between md:px-20 px-5 py-5 md:py-8 md:mt-10">
        <div className="md:mb-0 mb-20">
          <div className="text-xl md:text-3xl font-black">
            <span className="text-secondary-text-color">H</span>aider{" "}
            <span className="text-secondary-text-color">B</span>uilds
            <span className="text-secondary-text-color">.</span>
          </div>
          <p>
            Archetypes of the MODERN. identity are reinvented through details.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl font-bold">Pages</p>
          <ScrollLink
            smooth={true}
            duration={500}
            to="home"
            className="hover:text-secondary-text-color cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            smooth={true}
            duration={500}
            to="services"
            className="hover:text-secondary-text-color cursor-pointer"
          >
            Services
          </ScrollLink>
          <ScrollLink
            smooth={true}
            duration={500}
            to="projects"
            className="hover:text-secondary-text-color cursor-pointer"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            smooth={true}
            duration={500}
            to="testimonials"
            className="hover:text-secondary-text-color cursor-pointer"
          >
            Testimonials
          </ScrollLink>
        </div>
        <div>
          <p className="text-2xl font-bold">Services</p>
          <p>Fronted Development</p>
          <p>Backend Development</p>
          <p>Mobile Development</p>
          <p>Software Consulting</p>
          <p>Website Maintenance</p>
          <p>Website Design</p>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-2xl font-bold">Based</p>
            <p>Āzenes iela 8, Kurzemes rajons, Rīga, LV-1048</p>
            <p>Made with 💚 by Haider</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Socials</p>
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
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5 md:py-8 border-t-2 border-zinc-700">
        <p>Copyright © 2024 Haider Builds. All Rights Reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
