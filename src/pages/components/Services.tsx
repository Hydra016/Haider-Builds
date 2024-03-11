import React from "react";
import Image from "next/image";
import { services } from "../libs/Services";

const Services = () => {
  return (
    <div
      id="services"
      className="md:grid grid-cols-9 gap-4 md:mt-0 mt-5 md:px-20 px-5 py-5 md:py-8 "
    >
      <div className="md:hidden md:mb-0 mb-5 text-5xl font-black text-zinc-800">
        <p className="md:rotate-90">Services</p>
      </div>
      <div className="grid col-span-8">
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div key={i} className="bg-secondary-color p-5 rounded-xl">
              <div>
                <img src={service.icon} className="md:w-20 w-10" />
              </div>
              <div className="mt-10">
                <span className="block mb-3 text-2xl font-black">
                  {service.title}
                </span>
                <span>{service.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:block hidden py-20 text-5xl font-black text-zinc-800">
        <p className="md:rotate-90">Services</p>
      </div>
    </div>
  );
};

export default Services;
