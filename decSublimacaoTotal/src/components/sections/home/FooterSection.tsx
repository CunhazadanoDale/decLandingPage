"use client";

import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { Sparkles } from "lucide-react";

interface FooterProps {
  logo?: {
    icon: React.ReactElement;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Produtos",
    links: [
      { name: "Camisa Manga Curta", href: "#" },
      { name: "Regata Dry Fit", href: "#" },
      { name: "Abadá para Eventos", href: "#" },
      { name: "Babylook", href: "#" },
      { name: "Camisa Infantil", href: "#" },
    ],
  },
  {
    title: "A Empresa",
    links: [
      { name: "Sobre Nós", href: "#" },
      { name: "Nossos Clientes", href: "#" },
      { name: "Como Funciona", href: "#" },
      { name: "Contato", href: "#" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { name: "Dúvidas Frequentes", href: "#" },
      { name: "Prazos e Entregas", href: "#" },
      { name: "Trocas e Devoluções", href: "#" },
      { name: "Orçamento Rápido", href: "https://wa.me/5585SEUNUMERO" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaWhatsapp className="size-5" />, href: "https://wa.me/5585SEUNUMERO", label: "WhatsApp" },
];

const defaultLegalLinks = [
  { name: "Termos e Condições", href: "#" },
  { name: "Política de Privacidade", href: "#" },
];

export const FooterSection = ({
  logo = {
    icon: <Sparkles className="h-6 w-6 text-[#aa3bff]" />,
    title: "DecSublimação",
  },
  sections = defaultSections,
  description = "Especialistas em fabricação de camisas personalizadas em Dry Fit com sublimação total de alta qualidade para todo o Brasil.",
  socialLinks = defaultSocialLinks,
  copyright = `© ${new Date().getFullYear()} DecSublimação. Todos os direitos reservados.`,
  legalLinks = defaultLegalLinks,
}: FooterProps) => {
  return (
    <footer className="relative border-t overflow-hidden py-16 lg:py-24" style={{ borderColor: "var(--border)", background: "var(--bg)" }}>
      {/* Background Decorativo */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(to right, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      
      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          
          {/* Coluna Logo e Sobre */}
          <div className="flex w-full flex-col justify-between gap-6 lg:w-1/3 lg:items-start">
            <div className="flex items-center gap-2 lg:justify-start">
              {logo.icon}
              <h2 className="text-2xl font-bold tracking-tight" style={{ color: "var(--text-h)" }}>{logo.title}</h2>
            </div>
            <p className="max-w-[85%] text-sm leading-relaxed" style={{ color: "var(--text)" }}>
              {description}
            </p>
            <ul className="flex items-center space-x-6 mt-2">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="transition-colors hover:text-[#aa3bff]" style={{ color: "var(--text)" }}>
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colunas de Links */}
          <div className="grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3 lg:w-2/3 lg:gap-12">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-5 font-semibold text-base" style={{ color: "var(--text-h)" }}>
                  {section.title}
                </h3>
                <ul className="space-y-4 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="transition-colors hover:text-[#aa3bff]"
                      style={{ color: "var(--text)" }}
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Barra Inferior (Legal e Copyright) */}
        <div 
          className="mt-16 flex flex-col justify-between gap-4 border-t pt-8 text-sm md:flex-row md:items-center md:text-left"
          style={{ borderColor: "var(--border)", color: "var(--text)" }}
        >
          <p className="order-2 opacity-80 md:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-4 opacity-80 md:order-2 md:flex-row md:gap-6">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="transition-colors hover:text-[#aa3bff]">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
