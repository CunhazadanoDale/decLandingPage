"use client";

import * as React from "react";
import {
  ArrowRight,
  Shirt,
  Truck,
  Palette,
  Zap,
  Star,
  Activity,
} from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

/* ── Dados adaptados para sublimação ── */

const labels = [
  { icon: Palette, label: "Sublimação Total" },
  { icon: Shirt,   label: "Tecido Dry Fit" },
  { icon: Truck,   label: "Entrega Nacional" },
];

const features = [
  {
    label: "Cores sem Limite",
    description:
      "Estampas vibrantes e duradouras com sublimação total, sem restrição de cores ou degradês.",
  },
  {
    label: "Produção Ágil",
    description:
      "Processo otimizado do pedido à entrega — prazo a partir de 7 dias úteis para todo o Brasil.",
  },
  {
    label: "Qualidade Premium",
    description:
      "Tecido Dry Fit de alta performance com costura reforçada e acabamento profissional em cada peça.",
  },
];

const titleWords = [
  "CAMISAS",
  "QUE",
  "FALAM",
  "PELA",
  "SUA",
  "MARCA",
];

/* ── Componente ── */

export function CtaBannerSection() {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const springTransition = (delay: number) => ({
    delay,
    duration: 0.6,
    type: "spring" as const,
    stiffness: 100,
    damping: 10,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-32"
    >
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
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(170,59,255,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">

        {/* ── Bloco principal: título animado ── */}
        <div className="flex flex-col items-center text-center">

          <motion.h2
            initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
            animate={controls}
            variants={{
              visible: {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                transition: { duration: 0.6 },
              },
            }}
            className="relative font-mono text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight"
            style={{ color: "var(--text-h)" }}
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.12, duration: 0.5 },
                  },
                }}
                className="inline-block mx-2 md:mx-3"
              >
                {/* Destaque na última palavra */}
                {index === titleWords.length - 1 ? (
                  <span
                    style={{
                      background: "linear-gradient(135deg, #aa3bff, #c084fc)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </motion.h2>

          {/* Descrição */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: springTransition(0.9),
              },
            }}
            className="mx-auto mt-8 max-w-2xl text-xl font-mono"
            style={{ color: "var(--text)" }}
          >
            Produção personalizada com sublimação total, tecido Dry Fit e entrega
            para todo o Brasil — do pedido à sua porta.
          </motion.p>

          {/* Badges / labels */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                transition: { delay: 1.2, duration: 0.6 },
              },
            }}
            className="mt-10 flex flex-wrap justify-center gap-6"
          >
            {labels.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: springTransition(1.2 + index * 0.12),
                  },
                }}
                className="flex items-center gap-2 px-6"
              >
                <item.icon
                  className="h-5 w-5"
                  style={{ color: "#aa3bff" }}
                />
                <span
                  className="text-sm font-mono font-medium"
                  style={{ color: "var(--text-h)" }}
                >
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: springTransition(1.7),
              },
            }}
            className="mt-12"
          >
            <a
              href="https://wa.me/5585SEUNUMERO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="inline-flex items-center gap-2 px-10 py-4 font-mono font-bold text-base text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #aa3bff 0%, #7c3aed 100%)",
                  boxShadow: "0 4px 28px rgba(170,59,255,0.40)",
                  borderRadius: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 8px 36px rgba(170,59,255,0.60)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 28px rgba(170,59,255,0.40)";
                }}
              >
                SOLICITAR ORÇAMENTO{" "}
                <ArrowRight className="h-4 w-4" />
              </button>
            </a>
          </motion.div>
        </div>

        {/* ── Grid de 3 features ── */}
        <div className="container mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                y: 0,
                transition: springTransition(2.0),
              },
            }}
            className="text-center text-4xl font-mono font-bold mb-6"
            style={{ color: "var(--text-h)" }}
          >
            Por que escolher a gente?
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: {
                opacity: 1,
                transition: { delay: 2.2, duration: 0.6 },
              },
            }}
            className="grid md:grid-cols-3 max-w-6xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: springTransition(2.2 + index * 0.18),
                  },
                }}
                className="flex flex-col items-center text-center p-8"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                }}
              >
                <div
                  className="mb-6 rounded-full p-4"
                  style={{ background: "rgba(170,59,255,0.10)" }}
                >
                </div>
                <h4
                  className="mb-4 text-xl font-mono font-bold"
                  style={{ color: "var(--text-h)" }}
                >
                  {feature.label}
                </h4>
                <p
                  className="font-mono text-sm leading-relaxed"
                  style={{ color: "var(--text)" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
