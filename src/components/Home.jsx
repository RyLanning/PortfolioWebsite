import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import PortraitCircle from "../assets/PortraitImage-modified.png";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#eae2b7]">
      {/*Container*/}
      <div className="max-w-[1100px] mx-auto px-4 py-[150px] flex justify-center h-full ">
        <img className="h-[400px] w-[400px]" src={PortraitCircle} alt="" />
        <div>
          <p className="text-[#f77f00] ">{"//"}Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#bf2222]">
            Rylen Lanning
          </h1>
          <h2 className="py-4 text-3xl sm:text-7xl font-bold text-[#f77f00]">
            {"/* "}I am a Software Engineer with 4+ years of experience.{" */"}
          </h2>
          <div>
            <button className="text-[#bf2222] group border-2 border-black px-6 py-3 my-2 flex items-center hover:bg-[#bf2222] hover:text-black">
              <Link to="skills" smooth="true" duration={500}>
                View Skills
              </Link>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
