import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { Link } from "react-scroll";

interface Props {
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  menu: boolean;
}

const Menu = ({ setMenu, menu }: Props) => {
  return (
    <div
      className={`${
        menu ? "menu-opened" : "menu-opened-out"
      } w-full h-full menu md:hidden block`}
    >
      <div className="flex items-center justify-between">
        <span className="text-3xl text-primary-color font-black">Menu</span>
        <IoCloseCircleSharp
          className="text-primary-color"
          onClick={() => setMenu(false)}
          size={25}
        />
      </div>
      <div className="flex mt-20 flex-col text-primary-color  h-full">
        <div className="flex flex-col">
          <Link
            onClick={() => setMenu(false)}
            className="text-5xl font-extrabold mb-3"
            to="home"
          >
            Home
          </Link>
          <Link
            onClick={() => setMenu(false)}
            className="text-5xl font-extrabold mb-3"
            to="services"
          >
            Services
          </Link>
          <Link
            onClick={() => setMenu(false)}
            className="text-5xl font-extrabold mb-3"
            to="projects"
          >
            Projects
          </Link>
          <Link
            onClick={() => setMenu(false)}
            className="text-5xl font-extrabold mb-3"
            to="testimonials"
          >
            Testimonials
          </Link>
          <Link
            onClick={() => setMenu(false)}
            to="contact"
            className="text-5xl font-extrabold mb-3"
          >
            Contact
          </Link>
        </div>
        <div className="mt-80 font-bold">Made with 💚 by Haider</div>
      </div>
    </div>
  );
};

export default Menu;
