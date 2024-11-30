/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Masamayor from "../../assets/team/2.jpg";
import Juniville from "../../assets/team/1.jpg";
import duh from "../../assets/team/3.jpg";


const About = () => {
  return (
    <>
      <section
        id="features"
        className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 w-screen h-auto relative mb-56">
        {/* Intro Section */}
        <div className="flex mt-28">
          <div className="container pt-12 sm:pt-16 md:pt-20 lg:pt-24">
            <div className="text-center">
              <h1 className="text-blue-600 font-bold tracking-[0.10em] leading-tight text-3xl sm:text-6xl md:text-7xl lg:text-6xl lg:absolute lg:top-[10px] lg:left-[4em]">
                About Our Company
              </h1>
            </div>
            <div className="container sm:w-[500px] md:w-3/4 lg:w-[70%] mx-auto mt-4 lg:mt-3 lg:ml-[10px]">
              <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl font-normal tracking-[0.02em] text-justify">
                Plan your next vacation with us and explore different tourist
                destinations. We offer private and custom tours every day.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-24 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-[30rem] lg:ml-50 w-full sm:ml-26">
            <div className="relative w-full h-96 flex flex-col items-center">
              <div className="w-[250px] absolute top-32 left-2 inset-8 bg-sky-400 h-[370px] lg:h-[350px] lg:w-[300px] rounded-lg z-0 text-center hover:shadow-2xl hover:scale-[1.01] shadow-lg">
                <div className="relative left-0 -top-16 z-10 flex justify-center items-center">
                  <img
                    src={Juniville}
                    alt="Concha"
                    className="rounded-[10%] object-cover w-36 h-36 border-2 border-sky-600 hover:scale-105 transition duration-300 ease-in-out"
                  />
                </div>
                <h1 className="text-2xl font-bold text-white -mt-9 tracking-widest bg-sky-700 py-2 ml-14 w-[120px] rounded-lg lg:ml-[90px]">
                  CEO
                </h1>
                <h3 className="text-lg font-semibold text-black mt-8">
                  JUNIEVILLE Q. TORINO
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-8">
                  Bachelor of Science Information Systems
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-8">
                  torino.junieville@dnsc.edu.ph
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-8">
                  +639059115407
                </h3>
              </div>
            </div>

            <div className="relative w-full h-96 flex flex-col items-center">
              <div className="w-[280px] absolute top-32 left-0 inset-8 bg-sky-400 h-[370px] lg:h-[350px] lg:w-[300px] rounded-lg z-0 text-center hover:shadow-2xl hover:scale-[1.01] shadow-lg">
                <div className="relative left-0 -top-16 z-10 flex justify-center items-center">
                  <img
                    src={duh}
                    alt="Concha"
                    className="rounded-[10%] object-cover w-36 h-36 border-2 border-sky-600 hover:scale-105 transition duration-300 ease-in-out"
                  />
                </div>
                <h1 className="text-2xl font-bold text-white -mt-9 tracking-widest bg-sky-700 py-2 ml-14 w-[120px] rounded-lg lg:ml-[90px]">
                  CEO
                </h1>
                <h3 className="text-lg font-semibold text-black mt-8">
                  APPLE GRACE G. FORMENTERA
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-8">
                  Bachelor of Science Information Systems
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-8">
                  formentera.applegrace@dnsc.edu.ph
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-8">
                  +639059115407
                </h3>
              </div>
            </div>

            <div className="relative w-full h-96 flex flex-col items-center">
              <div className="w-[250px] absolute top-32 left-2 inset-8 bg-sky-400 h-[370px] lg:h-[350px] lg:w-[300px] rounded-lg z-0 text-center hover:shadow-2xl hover:scale-[1.01] shadow-lg">
                <div className="relative left-0 -top-16 z-10 flex justify-center items-center">
                  <img
                    src={Masamayor}
                    alt="Concha"
                    className="rounded-[10%] object-cover w-36 h-36 border-2 border-sky-600 hover:scale-105 transition duration-300 ease-in-out"
                  />
                </div>
                <h1 className="text-2xl font-bold text-white -mt-9 tracking-widest bg-sky-700 py-2 ml-14 w-[120px] rounded-lg lg:ml-[90px]">
                  CMO
                </h1>
                <h3 className="text-lg font-semibold text-black mt-8">
                  LOUAVEL MASAMAYOR
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-8">
                  Bachelor of Science Information Systems
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-8">
                  masamayor.louavel@dnsc.edu.ph
                </h3>
                <h3 className="text-lg font-semibold text-gray-600 mt-8">
                  +639515360530
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
