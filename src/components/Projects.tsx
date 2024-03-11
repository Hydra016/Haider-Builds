import React, { useEffect, useState } from "react";
import SubOptionBar from "./SubOptionBar";
import OptionBar from "./OptionBar";
import { projects } from "../libs/Projects";
import SingleProject from "./SingleProject";
import Button from "../libs/Button";

const Projects = () => {
  const [option, setOption] = useState("all");
  const [subOption, setSubOption] = useState("all");
  const [newProjects, setNewProjects] = useState(projects);
  const [shownProjects, setShownProjects] = useState(4);

  useEffect(() => {
    const filterByOption =
      option !== "all"
        ? projects.filter((project) => project.type === option)
        : projects;
    const filterBySubOption =
      subOption !== "all"
        ? filterByOption.filter((project) => project.subtype === subOption)
        : filterByOption;

    setNewProjects(filterByOption);
    option === "web" && setNewProjects(filterBySubOption);
  }, [option, subOption]);

  const renderShowBtn = () => {
    if (shownProjects >= newProjects.length) {
      return (
        <div className="flex justify-center w-full py-10">
          <Button
            title="Less"
            action={() =>
              shownProjects < 0
                ? setShownProjects(5)
                : setShownProjects(shownProjects - 4)
            }
          />
        </div>
      );
    } else if (shownProjects < newProjects.length && shownProjects > 4) {
      return (
        <div className="w-full flex justify-center">
          <div className="flex justify-center py-10">
            <div className="">
              <Button
                title="More"
                action={() =>
                  shownProjects > newProjects.length
                    ? setShownProjects(newProjects.length)
                    : setShownProjects(shownProjects + 4)
                }
              />
            </div>
            <div className="ml-5">
              <Button
                title="Less"
                action={() =>
                  shownProjects < 0
                    ? setShownProjects(5)
                    : setShownProjects(shownProjects - 4)
                }
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex justify-center w-full py-10">
          <Button
            title="More"
            action={() =>
              shownProjects > newProjects.length
                ? setShownProjects(newProjects.length)
                : setShownProjects(shownProjects + 4)
            }
          />
        </div>
      );
    }
  };

  return (
    <div className="md:px-20 px-5 py-0 md:py-5" id="projects">
      <div className="flex justify-center">
        <span className="md:text-6xl text-3xl font-bold text-secondary-text-color">
          PROJECTS
        </span>
      </div>
      <div className="flex justify-center my-5 px-0 md:px-80">
        <OptionBar
          option={option}
          setOption={setOption}
          setShownProjects={setShownProjects}
        />
      </div>
      <div className="grid grid-cols-6 gap-2">
        {option === "web" && (
          <SubOptionBar
            subOption={subOption}
            setSubOption={setSubOption}
            setShownProjects={setShownProjects}
          />
        )}
        <div
          className={`${
            option !== "web" ? "col-span-6" : "col-span-6 md:col-span-5"
          }`}
        >
          <div className="md:grid grid-cols-3 gap-4">
            {projects && newProjects.slice(0, shownProjects).map((project) => (
              <SingleProject key={project.title} project={project} />
            ))}
          </div>
          {newProjects.length > 4 ? renderShowBtn() : null}
        </div>
      </div>
    </div>
  );
};

export default Projects;
