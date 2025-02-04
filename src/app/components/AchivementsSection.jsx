"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const AchivementsList = [
  {
    metric: "Projetos",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Usuários",
    value: "1000", // Corrigido número
  },
  {
    metric: "Prêmios",
    value: "7",
  },
  {
    metric: "Anos",
    value: "5",
  },
];

const AchivementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between">
        {AchivementsList.map((Achivement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {Achivement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={Number(Achivement.value)}
                locale="pt-BR"
                className="text-white text-4xl font-bold"
                configs={(_, i) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (i + 1), 
                })}
              />
              {Achivement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{Achivement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchivementsSection;
