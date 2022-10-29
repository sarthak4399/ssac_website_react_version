import React from "react";
import image1 from "../Assets/image1.png";
import image2 from "../Assets/image2.png";
const Testimonial = () => {
  return (
    <div name="Explore">
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[300px] mx-auto my-4  shadow-2xl rounded-lg"
            src={image1}
            alt="profile"
          />
          <div className=" flex flex-col justify-center">
            <p className="text-2xl font-bold text-[#00df9a]">
              sarthak khandare{" "}
            </p>
            <h1 className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
              adipisci.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              dolores quas voluptas? Repellat molestias iure consectetur
              architecto nesciunt ex omnis, reiciendis illo unde, esse natus
              deleniti quasi incidunt saepe autem.
            </p>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[300px] mx-auto my-4  shadow-2xl rounded-lg"
            src={image2}
            alt="profile"
          />
          <div className=" flex flex-col justify-center">
            <p className="text-2xl font-bold text-[#00df9a]">
              sarthak khandare{" "}
            </p>
            <h1 className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
              adipisci.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              dolores quas voluptas? Repellat molestias iure consectetur
              architecto nesciunt ex omnis, reiciendis illo unde, esse natus
              deleniti quasi incidunt saepe autem.
            </p>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[300px] mx-auto my-4  shadow-2xl rounded-lg"
            src={image2}
            alt="profile"
          />
          <div className=" flex flex-col justify-center">
            <p className="text-2xl font-bold text-[#00df9a]">
              sarthak khandare{" "}
            </p>
            <h1 className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
              adipisci.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              dolores quas voluptas? Repellat molestias iure consectetur
              architecto nesciunt ex omnis, reiciendis illo unde, esse natus
              deleniti quasi incidunt saepe autem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
