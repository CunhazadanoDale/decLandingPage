import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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

export function ApparelShowcaseSection({
  badge = "SUBLIMAÇÃO TOTAL • DRY FIT PREMIUM",
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

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container relative z-10 mx-auto px-6"
      >
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div className="flex flex-col">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium">
                {badge}
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              {title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
            >
              {description}
            </motion.p>

            {/* BENEFÍCIOS */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid gap-4"
            >
              {[
                "Sublimação total em alta definição",
                "Tecido Dry Fit confortável e resistente",
                "Produção para pequenas e grandes quantidades",
                "Entrega para todo o Brasil",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-4 w-4" />
                  </div>

                  <span className="text-sm md:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a
                href={buttonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="mt-10 h-12 rounded-full px-8"
                >
                  {buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-10"
            >
              <div>
                <p className="text-2xl font-bold">
                  100%
                </p>
                <p className="text-sm text-muted-foreground">
                  Personalizado
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  Dry Fit
                </p>
                <p className="text-sm text-muted-foreground">
                  Premium
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">
                  Brasil
                </p>
                <p className="text-sm text-muted-foreground">
                  Entrega Nacional
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            variants={itemVariants}
            className="relative mx-auto flex h-[600px] w-full max-w-[650px] items-center justify-center"
          >
            {/* CARD 1 */}
            <motion.img
              src={imageUrl1}
              alt="Camisa personalizada manga curta"
              whileHover={{
                y: -12,
                rotate: -2,
              }}
              transition={{ duration: 0.3 }}
              className="
                absolute
                left-4
                top-10
                z-20
                h-[420px]
                w-[280px]
                rounded-3xl
                object-cover
                shadow-2xl
                rotate-[-8deg]
              "
            />

            {/* CARD 2 */}
            <motion.img
              src={imageUrl2}
              alt="Regata personalizada dry fit"
              whileHover={{
                y: -12,
                rotate: 2,
              }}
              transition={{ duration: 0.3 }}
              className="
                absolute
                right-4
                top-20
                z-10
                h-[420px]
                w-[280px]
                rounded-3xl
                object-cover
                shadow-2xl
                rotate-[8deg]
              "
            />

            {/* CARD 3 */}
            {imageUrl3 && (
              <motion.img
                src={imageUrl3}
                alt="Abadá personalizado"
                whileHover={{
                  y: -12,
                }}
                transition={{ duration: 0.3 }}
                className="
                  absolute
                  bottom-0
                  z-30
                  h-[420px]
                  w-[280px]
                  rounded-3xl
                  object-cover
                  shadow-2xl
                "
              />
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}