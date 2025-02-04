"use client";
import { React, useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Postgres</li>
        <li>Git</li>
        <li>GitHub</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Análise e Desenvolvimento de Sistemas - Faculdade CDL</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Desenvolvimento Full Stack - Formação Dev</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="py-24 text-white" id="sobre">
      <div
        className="md:grid md:grid-cols-2 gap-8 
            flex flex-col items-center py-8 px-4 xl:gap-16 
            sm:py-16"
      >
        <Image src="/images/sobre.png" width={400} height={400} alt="sobre" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
            Sou um desenvolvedor web full stack apaixonado por criar aplicações
            web interativas e responsivas. Tenho experiência em trabalhar com
            JavaScript, React, Node.js, PostgreSQL, HTML, CSS e Git. Aprendo
            rápido e estou sempre em busca de expandir meus conhecimentos e
            habilidades. Trabalho em equipe e estou animado para trabalhar com
            outras pessoas para criar aplicações incríveis.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
            >
              {" "}
              Formação{" "}
            </TabButton>
            <TabButton
              active={tab === "certification"}
              selectTab={() => handleTabChange("certification")}
            >
              {" "}
              Certificados{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
