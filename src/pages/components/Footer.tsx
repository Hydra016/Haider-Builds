import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-secondary-color w-full bg-secondary-color items-center">
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
          <Link
            smooth={true}
            duration={500}
            to="home"
            className="hover:text-secondary-text-color cursor-pointer"
          >
            Home
          </Link>
          <Link
            smooth={true}
            duration={500}
            to="services"
            className="hover:text-secondary-text-color cursor-pointer"
          >
            Services
          </Link>
          <Link
            smooth={true}
            duration={500}
            to="projects"
            className="hover:text-secondary-text-color cursor-pointer"
          >
            Projects
          </Link>
          <Link
            smooth={true}
            duration={500}
            to="testimonials"
            className="hover:text-secondary-text-color cursor-pointer"
          >
            Testimonials
          </Link>
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
        <div>
          <p className="text-2xl font-bold">Based</p>
          <p>Āzenes iela 8, Kurzemes rajons, Rīga, LV-1048</p>
          <p>Made with 💚 by Haider</p>
        </div>
      </div>
      <div className="flex justify-center py-5 md:py-8 border-t-2 border-zinc-700">
        <p>Copyright © 2024 Haider Builds. All Rights Reserved. </p>
      </div>
    </div>
  );
};

export default Footer;
