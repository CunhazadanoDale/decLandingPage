"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircleQuestion } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual é o pedido mínimo para camisas personalizadas?",
    answer:
      "Nosso pedido mínimo padrão é de 10 peças. Isso nos permite manter a alta qualidade da sublimação total e oferecer um preço competitivo. Para quantidades maiores, temos tabelas com descontos progressivos.",
  },
  {
    question: "Qual o prazo de produção e entrega?",
    answer:
      "O prazo de produção inicia após a aprovação da arte final e confirmação do pagamento, variando a partir de 7 dias úteis dependendo da quantidade. O tempo de entrega varia de acordo com o seu CEP e a modalidade de envio escolhida (Correios ou Transportadora).",
  },
  {
    question: "Vocês criam a arte da camisa?",
    answer:
      "Sim! Nossa equipe de design pode criar a arte do zero ou adaptar a sua ideia/logotipo para a sublimação total, garantindo o melhor resultado na impressão. O desenvolvimento da arte está incluso no valor do pedido fechado.",
  },
  {
    question: "Quais tamanhos estão disponíveis?",
    answer:
      "Trabalhamos com uma grade completa que vai do Infantil (2 ao 14), passando pelas modelagens Tradicional e Babylook (PP ao GG), até os tamanhos Plus Size (EXG1 ao EXG3).",
  },
  {
    question: "O tecido desfia ou desbota com o tempo?",
    answer:
      "Não. Utilizamos tecido Dry Fit 100% poliéster de alta tecnologia, que não dá bolinhas e não desfia facilmente. A técnica de sublimação total tinge diretamente o fio do tecido, garantindo que as cores permaneçam vivas e não desbotem nem descasquem com as lavagens.",
  },
];

export function FaqSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "var(--bg)" }} />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(to right, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow decorativo */}
      <div
        className="absolute right-0 bottom-0 pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(170,59,255,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 max-w-4xl">
        {/* Cabeçalho */}
        <div className="mb-14 flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              background: "rgba(170,59,255,0.10)",
              border: "1px solid rgba(170,59,255,0.35)",
              color: "#aa3bff",
            }}
          >
            <MessageCircleQuestion className="h-4 w-4" />
            Dúvidas Frequentes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-extrabold tracking-tight md:text-5xl"
            style={{ color: "var(--text-h)" }}
          >
            Ainda tem perguntas?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 h-1 w-14 rounded-full"
            style={{ background: "linear-gradient(90deg, #aa3bff, #c084fc)" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-5 max-w-xl text-base leading-relaxed"
            style={{ color: "var(--text)", fontSize: "1.0625rem" }}
          >
            Reunimos aqui as respostas para as dúvidas mais comuns dos nossos clientes
            para facilitar o seu processo de compra.
          </motion.p>
        </div>

        {/* Lista de FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mx-auto w-full rounded-2xl border p-6 md:p-8"
          style={{ 
            background: "var(--bg)", 
            borderColor: "var(--border)",
            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)"
          }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-base md:text-lg hover:no-underline hover:text-[#aa3bff]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        {/* CTA extra opcional para o WhatsApp */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p style={{ color: "var(--text)" }}>
            Não encontrou o que procurava?{" "}
            <a 
              href="https://wa.me/5585SEUNUMERO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-4 transition-colors"
              style={{ color: "#aa3bff" }}
            >
              Fale conosco no WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
