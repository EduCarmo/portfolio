"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const AchivementsList = [
  {
    id: 1, 
    metric: "Projetos",
    value: "100",
    postfix: "+",
  },
  {
    id: 2,
    prefix: "~",
    metric: "Usuários",
    value: "1000",
  },
  {
    id: 3,
    metric: "Prêmios",
    value: "7",
  },
  {
    id: 4,
    metric: "Anos",
    value: "5",
  },
];

const AchivementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between">
        {AchivementsList.map((achivement) => (
          <div
            key={achivement.id} 
            className="flex flex-col items-center justify-center mx-4"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achivement.prefix}
              <AnimatedNumbers
                key={`animated-${achivement.id}`} 
                includeComma
                animateToNumber={Number(achivement.value)}
                locale="pt-BR"
                className="text-white text-4xl font-bold"
                configs={(_, i) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (i + 1),
                })}
              />
              {achivement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achivement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchivementsSection;
