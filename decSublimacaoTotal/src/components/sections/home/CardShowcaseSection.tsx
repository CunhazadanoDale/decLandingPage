import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ApparelShowcaseSectionProps {
  badge?: string;
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink: string;

  imageUrl1: string;
  imageUrl2: string;
  imageUrl3?: string;

  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const highlights = [
  "Sublimação total com cores vibrantes e duradouras",
  "Tecido Dry Fit de alta performance e conforto",
  "Entrega para todo o Brasil com rapidez",
];

export function ApparelShowcaseSection({
  badge,
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl1,
  imageUrl2,
  imageUrl3,
  className,
}: ApparelShowcaseSectionProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-24 lg:py-32",
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />

      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      {/* Glow decorativo roxo no fundo esquerdo */}
      <div
        className="absolute left-0 top-1/3 -translate-y-1/2 pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(170,59,255,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container relative z-10 mx-auto px-6"
      >
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* ── LEFT – Conteúdo textual enriquecido ── */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* Badge com ícone e borda gradiente */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  background: "rgba(170,59,255,0.10)",
                  border: "1px solid rgba(170,59,255,0.35)",
                  color: "#aa3bff",
                  letterSpacing: "0.02em",
                }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                {badge ?? "Camisas Premium · Sublimação Total"}
              </span>
            </motion.div>

            {/* Título com palavra destacada em gradiente */}
            <motion.h2
              variants={itemVariants}
              className="mt-5 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]"
              style={{ color: "var(--text-h)" }}
            >
              {title}
            </motion.h2>

            {/* Linha decorativa */}
            <motion.div
              variants={itemVariants}
              className="mt-5 h-1 w-16 rounded-full lg:mx-0 mx-auto"
              style={{
                background: "linear-gradient(90deg, #aa3bff, #c084fc)",
              }}
            />

            {/* Descrição */}
            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-xl text-base leading-relaxed"
              style={{
                color: "var(--text)",
                fontSize: "1.0625rem",
              }}
            >
              {description}
            </motion.p>

            {/* Bullet points de destaque */}
            <motion.ul
              variants={itemVariants}
              className="mt-6 flex flex-col gap-3 lg:items-start items-center"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium" style={{ color: "var(--text-h)" }}>
                  <CheckCircle2
                    className="h-4 w-4 flex-shrink-0"
                    style={{ color: "#aa3bff" }}
                  />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTA Button premium */}
            <motion.div variants={itemVariants} className="mt-9">
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #aa3bff 0%, #7c3aed 100%)",
                  boxShadow: "0 4px 24px rgba(170,59,255,0.40), 0 1px 0 rgba(255,255,255,0.15) inset",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(170,59,255,0.55), 0 1px 0 rgba(255,255,255,0.15) inset";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(170,59,255,0.40), 0 1px 0 rgba(255,255,255,0.15) inset";
                }}
              >
                <MessageCircle className="h-5 w-5" />
                {buttonText}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* Micro-texto de confiança */}
              <p className="mt-3 text-xs" style={{ color: "var(--text)", opacity: 0.7 }}>
                Resposta em minutos via WhatsApp · Sem compromisso
              </p>
            </motion.div>

          </div>

          {/* ── RIGHT – Inalterada (3 imagens sobrepostas) ── */}
          <motion.div
            variants={itemVariants}
            className="relative mx-auto flex h-[600px] w-full max-w-[650px] items-center justify-center"
          >
            {/* CARD 1 */}
            <motion.img
              src={imageUrl1}
              alt="Camisa personalizada manga curta"
              whileHover={{ y: -12, rotate: -2 }}
              transition={{ duration: 0.3 }}
              className="absolute left-4 top-10 z-20 h-[420px] w-[280px] rounded-3xl object-cover shadow-2xl rotate-[-8deg]"
            />

            {/* CARD 2 */}
            <motion.img
              src={imageUrl2}
              alt="Regata personalizada dry fit"
              whileHover={{ y: -12, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="absolute right-4 top-20 z-10 h-[420px] w-[280px] rounded-3xl object-cover shadow-2xl rotate-[8deg]"
            />

            {/* CARD 3 */}
            {imageUrl3 && (
              <motion.img
                src={imageUrl3}
                alt="Abadá personalizado"
                whileHover={{ y: -12 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 z-30 h-[420px] w-[280px] rounded-3xl object-cover shadow-2xl"
              />
            )}
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}