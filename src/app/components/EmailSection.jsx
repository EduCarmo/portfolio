"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    assunto: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_c5z2h6q",
        "template_u53wpl2",
        {
          email: formData.email,
          assunto: formData.assunto,
          message: formData.message,
        },
        "wFW53wyux5rUmxosv"
      )
      .then(
        () => {
          setEmailSubmitted(true);
          setTimeout(() => {
            setEmailSubmitted(false);
          }, 5000);
          setFormData({ email: "", assunto: "", message: "" });
        },
        (error) => {
          console.error("Erro ao enviar e-mail:", error);
          alert("Falha ao enviar mensagem.");
        }
      );
  };

  return (
    <section className="grid md:grid-cols-2 my-2 md:my-12 py-24 gap-4 relative" id="contato">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2 mt-12"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Vamos nos conectar
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          No momento estou em busca de novas oportunidades, minha caixa de
          entrada está sempre aberta. Se você tiver alguma dúvida ou quiser
          dizer "oi", fique à vontade para entrar em contato comigo.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="#"
            target="_blank"
            className="flex items-center gap-2 text-[#ADB7BE] hover:text-white"
          >
            <FaGithub className="h-8 w-8" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="flex items-center gap-2 text-[#ADB7BE] hover:text-white"
          >
            <FaLinkedin className="h-8 w-8" />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="flex items-center gap-2 text-[#ADB7BE] hover:text-white"
          >
            <FaInstagram className="h-8 w-8" />
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Seu Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="Digite seu email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="assunto"
              className="text-white block mb-2 text-sm font-medium"
            >
              Assunto
            </label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="Digite o assunto"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="Digite sua mensagem"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
            Enviar Mensagem
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email enviado com sucesso!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
