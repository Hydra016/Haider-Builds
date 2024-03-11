import React from 'react'

interface Props {
    subOption: string;
    setSubOption: React.Dispatch<React.SetStateAction<string>>;
    setShownProjects: React.Dispatch<React.SetStateAction<number>>;
}

const SubOptionBar = ({ subOption, setSubOption, setShownProjects }: Props) => {
  return (
    <div className="bg-secondary-color rounded-xl hidden md:flex md:flex-col items-center md:text-2xl font-bold md:py-10">
            <div
              onClick={() => {
                setSubOption("all")
                setShownProjects(4)
              }}
              className={`cursor-pointer mt-0 md:px-10 rounded-xl ${
                subOption === "all" && "selected"
              }`}
            >
              All
            </div>
            <div
              onClick={() => {
                setSubOption("react")
                setShownProjects(4)
              }}
              className={`cursor-pointer mt-5 md:px-10 rounded-xl ${
                subOption === "react" && "selected"
              }`}
            >
              React
            </div>
            <div
              onClick={() => {
                setSubOption("vue")
                setShownProjects(4)
              }}
              className={`cursor-pointer mt-5 md:px-10 rounded-xl ${
                subOption === "vue" && "selected"
              }`}
            >
              Vue
            </div>
            <div
              onClick={() => {
                setSubOption("svelte")
                setShownProjects(4)
              }}
              className={`cursor-pointer mt-5 md:px-10 rounded-xl ${
                subOption === "svelte" && "selected"
              }`}
            >
              Svelte
            </div>
          </div>
  )
}

export default SubOptionBar