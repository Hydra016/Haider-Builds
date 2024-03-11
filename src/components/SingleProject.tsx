import React, { useState } from "react";
import { Project } from "@/types/Project";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

interface Props {
  project: Project;
}

const SingleProject = ({ project }: Props) => {
  const [isHovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      className={`${
        project.size === "large" && "md:col-span-2"
      } rounded-xl project-img-container relative`}
    >
      <img
        src={project.image}
        className="rounded-xl object-fill h-full w-full mix-blend-overlay md:mb-0 mb-5 project-img"
      />
      {isHovered ? (
        <div className="absolute top-0 p-10 flex flex-col justify-between w-full h-full">
          <div>
            <p className="md:text-7xl font-black md:mb-5">{project.title}</p>
            <p className={`text-xs md:text-base font-black`}>{project.content}</p>
          </div>
          <div>
            <div className="mb-3 md:text-lg">
            <span>Built with: </span>{project.techStack.map(tech => <span className="capitalize">{tech}, </span>)}
            </div>
            <div className="flex">
              <Link href={project.github} target="_blank"><FaGithub size={25} className="mr-3" /></Link>
              {project.deployed && <Link target="_blank" href={project.deployed}><FaExternalLinkAlt size={25} /></Link>}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SingleProject;
