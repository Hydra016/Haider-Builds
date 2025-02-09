import React from "react";

interface Props {
  option: string;
  setOption: React.Dispatch<React.SetStateAction<string>>;
  setShownProjects: React.Dispatch<React.SetStateAction<number>>;
}

const OptionBar = ({ option, setOption, setShownProjects }: Props) => {
  return (
    <div className="flex bg-secondary-color bg-[#1a1a1d] w-full md:py-5 md:px-10 rounded-xl justify-between items-center font-bold">
      <div
        className={`cursor-pointer md:px-10 py-2 px-5 rounded-xl ${
          option === "all" && "selected"
        }`}
        onClick={() => {
          setOption("all")
          setShownProjects(4)
        }}
      >
        All
      </div>
      <div
        className={`cursor-pointer md:px-10 py-2 px-5 rounded-xl ${
          option === "web" && "selected"
        }`}
        onClick={() => {
          setOption("web")
          setShownProjects(4)
        }}
      >
        Web
      </div>
      <div
        onClick={() => {
          setOption("mobile")
          setShownProjects(4)
        }}
        className={`cursor-pointer md:px-10 py-2 px-5 rounded-xl ${
          option === "mobile" && "selected"
        }`}
      >
        Mobile
      </div>
    </div>
  );
};

export default OptionBar;
