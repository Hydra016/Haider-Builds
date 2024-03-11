import React, { useState } from "react";
import Button from "../libs/Button";
import { FiMenu } from "react-icons/fi";
import Menu from "./Menu";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div>
      <div className="flex justify-between w-full md:px-20 px-5 py-5 md:py-8 bg-secondary-color items-center">
        <div className="text-xl md:text-3xl font-black flex items-center">
          <div className="mr-4">
            <img src="/avatar3.png" className="avatar rounded-full w-12" />
          </div>
          <span className="text-secondary-text-color">H</span>aider{" "}
          <span className="text-secondary-text-color">B</span>uilds
          <span className="text-secondary-text-color">.</span>
        </div>
        <div className="md:flex hidden">
          <Link
            className="mr-5 hover:text-secondary-text-color text-sm md:text-xl cursor-pointer"
            to="home"
          >
            Home
          </Link>
          <Link
            className="mr-5 hover:text-secondary-text-color text-sm md:text-xl cursor-pointer"
            to="services"
            smooth={true}
            duration={500}
          >
            Services
          </Link>
          <Link
            className="mr-5 hover:text-secondary-text-color text-sm md:text-xl cursor-pointer"
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="mr-5 hover:text-secondary-text-color text-sm md:text-xl cursor-pointer"
            to="testimonials"
            smooth={true}
            duration={500}
          >
            Testimonials
          </Link>
        </div>
        <div className="md:block hidden">
          <Button title="Let's Talk" location="contact" />
        </div>
        <div className="md:hidden block">
          <FiMenu size={20} onClick={() => setMenu(true)} />
        </div>
        {<Menu setMenu={setMenu} menu={menu} />}
      </div>
    </div>
  );
};

export default Navbar;
