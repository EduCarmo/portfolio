"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start "
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r  from-blue-900 via-blue-600 to-blue-400">
              Olá, Eu sou{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Eduardo", 1000, "Desenvolvedor Web", 1000]}
              wrapper="span"
              speed={1}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Sou Eduardo Carmo, desenvolvedor full stack.
          </p>
          <div className="flex justify-center sm:justify-start gap-4 text-4xl text-[#ADB7BE] mb-6 flex-wrap">
            <FaHtml5 className="text-orange-500" title="HTML5" />
            <FaCss3Alt className="text-blue-500" title="CSS3" />
            <FaBootstrap className="text-purple-500" title="Bootstrap" />
            <FaJs className="text-yellow-400" title="JavaScript" />
            <SiTypescript className="text-blue-400" title="TypeScript" />
            <FaReact className="text-cyan-400" title="React" />
            <SiNextdotjs className="text-white" title="Next.js" />
            <FaNodeJs className="text-green-500" title="Node.js" />
            <FaGithub className="text-white" title="GitHub" />
            <FaGitAlt className="text-orange-500" title="Git" />
          </div>
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
        </motion.div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
          >
            <Image
              src="/images/eduardo.png"
              alt="Eduardo Carmo"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
