import React from "react";
import GRE from "../Assets/GRE.png";
import IELTS from "../Assets/IELTS.png";
import TOEFL from "../Assets/TOEFL.png";

const Card = () => {
  return (
    <div className=" w-full py-[10rem] px-4 bg-[#141414]" name="exam">
      <h1 className="text-[white] flex justify-center mb-20 text-2xl font-bold">
        EXAMS
      </h1>
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8  ">
        <div className=" hover:bg-[#141414] hover:text-white w-full shadow-2xl flex  flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white border ">
          <img className="w-20 mx-auto mt-[3rem]" src={GRE} alt="" />
          <h2 className=" text-2xl font-bold text-center py-8">GRE</h2>
          <p className=" text-center text-small  border-b  ">
            Graduate Record Examination. The GRE is a multiple-choice,
            computer-based, standardized exam that is often required for
            admission to graduate programs and graduate business programs (MBA)
            globally.
          </p>

          <button className="uppercase bg-[#00df9a] rounded-md font-medium my-6 px-6 mx-auto py-3 ">
            Learn More
          </button>
        </div>
        <div className=" hover:bg-[#141414] hover:text-white  w-full shadow-2xl flex  flex-col py-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300 bg-white border ">
          <img className="w-20 mx-auto mt-[3rem] " src={IELTS} alt="" />
          <h2 className=" text-2xl font-bold text-center py-8">IELTS</h2>
          <p className=" text-center text-small  border-b  ">
            IELTS (the International English Language Testing System). Thousands
            of the world’s most reputable universities and colleges accept IELTS
            results as evidence of English language proficiency.
          </p>

          <button className="uppercase bg-[#00df9a] rounded-md font-medium my-6 px-6 mx-auto py-3 ">
            Learn More
          </button>
        </div>
        <div className="hover:bg-[#141414] hover:text-white w-full shadow-2xl flex  flex-col py-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white border ">
          <img className="w-20 mx-auto mt-[3rem]" src={TOEFL} alt="" />
          <h2 className=" text-2xl font-bold text-center py-8">TOEFL</h2>
          <p className=" text-center text-small  border-b  ">
            Test of English as a Foreign Language. TOEFL is conducted by the
            Educational Testing Service (ETS) and is widely accepted by many
            universities.
          </p>
          <button className="uppercase bg-[#00df9a] rounded-md font-medium my-11 px-6 mx-auto py-3 ">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
