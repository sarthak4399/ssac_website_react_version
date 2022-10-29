import React from "react";
import Typed from "react-typed";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className=" text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className=" text-[#00df9a] font-bold p-2 text-2xl underline">
          {" "}
          SGGSIE&T
        </p>
        <h1 className=" md: text-7xl sm:text-6xl  font-bold md:py6 hover:animate-pulse">
          {" "}
          STUDY ABROAD CHAPTER
        </h1>

        <div>
          <p className="md:text-2xl sm:textxl text uppercase text-gray-400">
            Created
          </p>

          <Typed
            className="md:text-2xl sm:textxl text uppercase text-[#00df9a]"
            strings={["FOR STUDENTS ", "BY THE STUDENTS"]}
            typeSpeed={100}
            backSpeed={90}
            loop
          />
        </div>
        <p calssName=" font-bold p-6 text-2xl uppercase ">
          Make your study abroad dream come true with us We as a team at
          SGGSIE&T through SSAC helping students pursue your studying abroad
          dream.
        </p>
        <Link
          to="Explore"
          smooth
          duration={500}
          className=" justify-center group font-medium px-6 py-3 my-2 flex items-center rounded-md w-[200px] bg-[#00df9a] cursor-pointer mx-auto"
        >
          Explore
          <span className=" group-hover:rotate-90 duration-300 text-center sm:text-left">
            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
