import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      Link: "Home",
    },
    {
      id: 2,
      Link: "About",
    },
    {
      id: 3,
      Link: "Countries",
    },
    {
      id: 4,
      Link: "News",
    },
    {
      id: 5,
      Link: "contact",
    },
    {
      id: 6,
      Link: "EXAMS",
    },
  ];

  return (
    <div className=" flex justify-between items-center w-full h-20 px-4 text-white ">
      <div className="w-20 mt-[15px] ">
        {/* <h1 className="text-3xl font-bold ml-2 text-[#00df9a]">SSAC</h1> */}
        <img
          src="https://ssac.sggs.ac.in/wp-content/uploads/2021/06/SSAC-logo-5-1.png"
          alt=""
        />
      </div>
      <ul className="hidden md:flex ">
        {links.map(({ id, Link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer uppercase text-gray-500 hover:scale-105 hover:text-[#00df9a]"
          >
            {Link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-500 pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col text-1xl justify-center items-center absolute top-0 left-0 w-full h-screen bg-neutral-900">
          {links.map(({ id, Link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer  py-6 text-gray-500 uppercase hover:text-[#00df9a]"
            >
              {Link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
