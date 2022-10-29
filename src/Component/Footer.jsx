import React from "react";
import { FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">SSAC</h1>
        <p className="py-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
          ullam iste repellat consequatur libero reiciendis, blanditiis
          accusantium.
        </p>
        <div className="flex  justify-self-start  md:w-[75%] my-2 hover:text-[#00df9a]">
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
        </div>
      </div>

      <div>
        <ul>
          <li className="py-2 text-sm hover:text-[#00df9a] ">HOME</li>
          <li className="py-2 text-sm hover:text-[#00df9a]">NEWS</li>
          <li className="py-2 text-sm hover:text-[#00df9a]">EXAMS</li>
          <li className="py-2 text-sm hover:text-[#00df9a]">COUNTRIES</li>
          <li className="py-2 text-sm hover:text-[#00df9a]">ABOUT</li>
        </ul>
      </div>
      <div className="w-full text-white px-[-10]">
        <div className="w-full mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2 my-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
