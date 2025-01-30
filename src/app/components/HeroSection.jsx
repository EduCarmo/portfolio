"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400">
              Olá, Eu sou{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Eduardo Carmo", 1000, "Desenvolvedor Full Stack", 1000]}
              wrapper="span"
              speed={1}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Olá me chamo Eduardo Carmo, sou um desenvolvedor Full Stack com
            conhecimento em HTML, CSS, JavaScript, React, Next.js, Node.js e
            React Native. Eu tenho experiência em desenvolvimento web e mobile.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white hover:opacity-80">
              Contato
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white hover:opacity-80 mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:text-xl">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/eduardo.png"
              alt="Eduardo Carmo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
