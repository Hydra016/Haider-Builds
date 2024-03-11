import { Link } from "react-scroll";
import React, { ReactElement } from "react";
import { FaChevronRight } from "react-icons/fa";
import { PiSpinner } from "react-icons/pi";
import { TailSpin } from "react-loader-spinner";

interface Props {
  title: string;
  location?: string;
  action?: () => void;
  loading?: boolean;
  icon?: ReactElement;
}

const Button = ({ title, location, action, loading, icon }: Props) => {
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
          {title}
          {loading ? (
            <span className="ml-5">
              <TailSpin
                visible={true}
                height="20"
                width="20"
                color="#fff"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </span>
          ) : (
            icon ? icon : <FaChevronRight className="ml-5" size={15} />
          )}
        </div>
      )}
    </div>
  );
};

export default Button;
