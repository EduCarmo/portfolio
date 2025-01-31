"use client";
import { React, useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'


const AboutSection = () => {

    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 
            flex flex-col items-center py-8 px-4 xl:gap-16 
            sm:py-16'
            >
                <Image
                    src="/images/sobre.png"
                    width={400}
                    height={400}
                    alt="sobre"
                />
                <div>
                    <h2 className='text-4xl font-bold text-white mb-4'>Sobre mim</h2>
                    <p className='text-base lg:text-lg'>
                        Sou Eduardo Carmo, desenvolvedor full stack
                        formado em Análise e Desenvolvimento de Sistemas.
                        Tenho paixão por transformar ideias em soluções
                        eficientes e funcionais, sempre buscando inovação e
                        impacto nos projetos que desenvolvemos.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton active={tab === "skills"} selectTab={() => handleTabChange("skills")}>
                            Skills{" "}
                        </TabButton>
                        <TabButton active={tab === "education"} selectTab={() => handleTabChange("education")}>
                            Formação{" "}
                        </TabButton>
                        <TabButton active={tab === "certification"} selectTab={() => handleTabChange("certification")}>
                            Experiência{" "}
                        </TabButton>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection