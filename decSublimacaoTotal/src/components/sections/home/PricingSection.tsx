"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface PricingFeature {
  title: string;
  items: string[];
}

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  unit?: string;
  originalPrice?: number;
  features: PricingFeature[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export function PricingCard({
  title,
  description,
  price,
  unit = "un",
  originalPrice,
  features,
  buttonText = "Solicitar Orçamento",
  onButtonClick,
}: PricingCardProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      className="container py-12 md:py-24"
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <Card className="relative mx-auto w-full max-w-6xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* ── Esquerda: título, preço e botão ── */}
          <motion.div
            className="flex flex-col justify-between p-6 lg:w-2/5 lg:p-10"
            variants={itemVariants}
          >
            <div>
              <CardHeader className="p-0">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl font-bold">{title}</CardTitle>
                    <CardDescription className="mt-2">{description}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <motion.div className="mt-6 space-y-2" variants={itemVariants}>
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-medium" style={{ color: "var(--text)" }}>
                    A partir de
                  </span>
                  <span
                    className="text-5xl font-extrabold"
                    style={{ color: "var(--text-h)" }}
                  >
                    R${price},<span className="text-3xl">00</span>
                  </span>
                  {originalPrice && (
                    <span className="text-xl line-through" style={{ color: "var(--text)", opacity: 0.5 }}>
                      R${originalPrice}
                    </span>
                  )}
                </div>
                <span className="block text-sm" style={{ color: "var(--text)", opacity: 0.7 }}>
                  por {unit} · pedido mínimo negociável
                </span>
              </motion.div>
            </div>

            <motion.div className="mt-8" variants={itemVariants}>
              <a
                href="https://wa.me/5585SEUNUMERO"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <button
                  className="w-full h-12 px-8 rounded-full text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #aa3bff 0%, #7c3aed 100%)",
                    boxShadow: "0 4px 24px rgba(170,59,255,0.40)",
                  }}
                  onClick={onButtonClick}
                >
                  {buttonText}
                </button>
              </a>
              <p className="mt-3 text-center text-xs" style={{ color: "var(--text)", opacity: 0.6 }}>
                Resposta rápida via WhatsApp · Sem compromisso
              </p>
            </motion.div>
          </motion.div>

          <Separator className="lg:my-6 lg:hidden" />

          {/* ── Direita: lista de features ── */}
          <motion.div
            className="p-6 lg:w-3/5 lg:p-10"
            style={{ background: "rgba(170,59,255,0.04)" }}
            variants={itemVariants}
          >
            <div className="space-y-6">
              {features.map((feature, featureIndex) => (
                <div key={featureIndex}>
                  <h3
                    className="mb-4 text-lg font-semibold"
                    style={{ color: "var(--text-h)" }}
                  >
                    {feature.title}:
                  </h3>
                  <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {feature.items.map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-2"
                        variants={listItemVariants}
                        custom={index + featureIndex * feature.items.length}
                      >
                        <Check
                          className="h-4 w-4 flex-shrink-0"
                          style={{ color: "#aa3bff" }}
                        />
                        <span className="text-sm" style={{ color: "var(--text)" }}>
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  {featureIndex < features.length - 1 && (
                    <Separator className="my-6" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.section>
  );
}

/* ─────────────────────────────────────────
   Seção wrapper com cabeçalho e dados padrão
───────────────────────────────────────── */

const DEFAULT_FEATURES: PricingFeature[] = [
  {
    title: "O que está incluso",
    items: [
      "Sublimação total (frente, costas e mangas)",
      "Tecido Dry Fit de alta qualidade",
      "Estampa sem limitação de cores",
      "Arte finalizada pela nossa equipe",
      "Acabamento profissional",
      "Etiqueta personalizada (opcional)",
    ],
  },
  {
    title: "Modelos disponíveis",
    items: [
      "Manga curta",
      "Manga longa",
      "Regata",
      "Babylook feminina",
      "Abadá",
      "Camisa infantil",
    ],
  },
  {
    title: "Entrega e prazo",
    items: [
      "Entrega para todo o Brasil",
      "Prazo a partir de 7 dias úteis",
      "Rastreamento do pedido",
      "Embalagem segura para envio",
    ],
  },
];

export function PricingSection() {
  return (
    <section className="relative overflow-hidden py-4">
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

      {/* Glow decorativo central */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(170,59,255,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 mx-auto px-6">
        {/* Cabeçalho */}
        <div className="mb-4 flex flex-col items-center text-center">
          <span
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              background: "rgba(170,59,255,0.10)",
              border: "1px solid rgba(170,59,255,0.35)",
              color: "#aa3bff",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
            Investimento
          </span>
          <h2
            className="text-4xl font-extrabold tracking-tight md:text-5xl"
            style={{ color: "var(--text-h)" }}
          >
            Preço Justo, Qualidade Superior
          </h2>
          <div
            className="mt-4 h-1 w-14 rounded-full"
            style={{ background: "linear-gradient(90deg, #aa3bff, #c084fc)" }}
          />
          <p
            className="mt-5 max-w-xl text-base leading-relaxed"
            style={{ color: "var(--text)", fontSize: "1.0625rem" }}
          >
            Valores competitivos com entrega para todo o Brasil. Solicite um orçamento
            personalizado para o seu pedido.
          </p>
        </div>

        {/* Card de preço */}
        <PricingCard
          title="Camisas Personalizadas"
          description="Sublimação total em tecido Dry Fit para qualquer ocasião — eventos, empresas, equipes e muito mais."
          price={29}
          originalPrice={45}
          unit="peça"
          features={DEFAULT_FEATURES}
          buttonText="Solicitar Meu Orçamento"
        />
      </div>
    </section>
  );
}
