import { Link } from "react-scroll";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { PiSpinner } from "react-icons/pi";

interface Props {
  title: string;
  location?: string;
  action?: () => void;
  loading: boolean;
}

const Button = ({ title, location, action, loading }: Props) => {
  return (
    <div className={`btn ${loading ? "btn-loading" : ""}`} onClick={action}>
      <div className="btn-circle"></div>
      {location && (
        <Link
          smooth={true}
          duration={500}
          className="btn-text text-base md:text-2xl font-black"
          to={location}
        >
          {title} <FaChevronRight className="ml-2" size={15} />
        </Link>
      )}
      {!location && (
        <div className="btn-text text-base md:text-2xl font-black">
          {title}{" "}
          {loading ? (
            <div className="animate-spin ml-2">
              <PiSpinner />
            </div>
          ) : (
            <FaChevronRight className="ml-2" size={15} />
          )}
        </div>
      )}
    </div>
  );
};

export default Button;
