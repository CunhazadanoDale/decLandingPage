import { useState } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export interface ShirtModel {
  id: string;
  name: string;
  role: string;         // tipo da camisa / categoria
  image: string;
  social?: {
    instagram?: string;
    whatsapp?: string;
  };
}

const DEFAULT_MODELS: ShirtModel[] = [
  {
    id: '1',
    name: 'Manga Curta Classic',
    role: 'Sublimação Total · Dry Fit',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80',
    social: { instagram: '#', whatsapp: '#' },
  },
  {
    id: '2',
    name: 'Regata Esportiva',
    role: 'Alto Desempenho · Dry Fit',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=400&q=80',
    social: { instagram: '#', whatsapp: '#' },
  },
  {
    id: '3',
    name: 'Abadá Personalizado',
    role: 'Eventos · Carnaval',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    social: { instagram: '#' },
  },
  {
    id: '4',
    name: 'Manga Longa Premium',
    role: 'Proteção Solar · Dry Fit',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=400&q=80',
    social: { instagram: '#', whatsapp: '#' },
  },
  {
    id: '5',
    name: 'Babylook Feminina',
    role: 'Feminino · Sublimação Total',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    social: { instagram: '#', whatsapp: '#' },
  },
  {
    id: '6',
    name: 'Camisa Infantil',
    role: 'Infantil · Tecido Macio',
    image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=400&q=80',
    social: { instagram: '#' },
  },
];

interface ModelsShowcaseSectionProps {
  models?: ShirtModel[];
  title?: string;
  subtitle?: string;
}

export function ModelsShowcaseSection({
  models = DEFAULT_MODELS,
  title = 'Nossos Modelos em Ação',
  subtitle = 'Cada peça produzida com sublimação total e tecido Dry Fit de alta performance. Passe o mouse para ver os detalhes.',
}: ModelsShowcaseSectionProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const col1 = models.filter((_, i) => i % 3 === 0);
  const col2 = models.filter((_, i) => i % 3 === 1);
  const col3 = models.filter((_, i) => i % 3 === 2);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'var(--bg)' }} />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(to right, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent" />

      {/* Glow decorativo direito */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: '480px',
          height: '480px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(170,59,255,0.10) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
      />

      <div className="container relative z-10 mx-auto px-6">

        {/* Cabeçalho da seção */}
        <div className="mb-14 flex flex-col items-center text-center">
          <span
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              background: 'rgba(170,59,255,0.10)',
              border: '1px solid rgba(170,59,255,0.35)',
              color: '#aa3bff',
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
            Galeria de Modelos
          </span>
          <h2
            className="text-4xl font-extrabold tracking-tight md:text-5xl"
            style={{ color: 'var(--text-h)' }}
          >
            {title}
          </h2>
          <div
            className="mt-4 h-1 w-14 rounded-full"
            style={{ background: 'linear-gradient(90deg, #aa3bff, #c084fc)' }}
          />
          <p
            className="mt-5 max-w-xl text-base leading-relaxed"
            style={{ color: 'var(--text)', fontSize: '1.0625rem' }}
          >
            {subtitle}
          </p>
        </div>

        {/* Grid principal: fotos + lista */}
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-14 select-none w-full max-w-5xl mx-auto">

          {/* ── Esquerda: grade de fotos ── */}
          <div className="flex gap-2 md:gap-3 flex-shrink-0 overflow-x-auto pb-1 md:pb-0">
            {/* Coluna 1 */}
            <div className="flex flex-col gap-2 md:gap-3">
              {col1.map((model) => (
                <PhotoCard
                  key={model.id}
                  model={model}
                  className="w-[110px] h-[120px] sm:w-[130px] sm:h-[140px] md:w-[155px] md:h-[165px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>

            {/* Coluna 2 – deslocada para baixo */}
            <div className="flex flex-col gap-2 md:gap-3 mt-[48px] sm:mt-[56px] md:mt-[68px]">
              {col2.map((model) => (
                <PhotoCard
                  key={model.id}
                  model={model}
                  className="w-[122px] h-[132px] sm:w-[145px] sm:h-[155px] md:w-[172px] md:h-[182px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>

            {/* Coluna 3 – deslocada levemente */}
            <div className="flex flex-col gap-2 md:gap-3 mt-[22px] sm:mt-[26px] md:mt-[32px]">
              {col3.map((model) => (
                <PhotoCard
                  key={model.id}
                  model={model}
                  className="w-[115px] h-[125px] sm:w-[136px] sm:h-[146px] md:w-[162px] md:h-[172px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>
          </div>

          {/* ── Direita: lista de modelos ── */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-col gap-4 md:gap-5 pt-0 md:pt-2 flex-1 w-full">
            {models.map((model) => (
              <ModelRow
                key={model.id}
                model={model}
                hoveredId={hoveredId}
                onHover={setHoveredId}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Foto card
───────────────────────────────────────── */

function PhotoCard({
  model,
  className,
  hoveredId,
  onHover,
}: {
  model: ShirtModel;
  className: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === model.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl cursor-pointer flex-shrink-0 transition-opacity duration-400',
        className,
        isDimmed ? 'opacity-60' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(model.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={model.image}
        alt={model.name}
        className="w-full h-full object-cover transition-[filter] duration-500"
        style={{
          filter: isActive ? 'grayscale(0) brightness(1)' : 'grayscale(1) brightness(0.77)',
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   Linha de modelo na lista
───────────────────────────────────────── */

function ModelRow({
  model,
  hoveredId,
  onHover,
}: {
  model: ShirtModel;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const isActive = hoveredId === model.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial = model.social?.instagram ?? model.social?.whatsapp;

  return (
    <div
      className={cn(
        'cursor-pointer transition-opacity duration-300',
        isDimmed ? 'opacity-50' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(model.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Nome + ícones sociais */}
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'h-3 rounded-[5px] flex-shrink-0 transition-all duration-300',
            isActive ? 'w-5' : 'w-4',
          )}
          style={{
            background: isActive ? '#aa3bff' : 'rgba(170,59,255,0.25)',
          }}
        />
        <span
          className={cn(
            'text-base md:text-[18px] font-semibold leading-none tracking-tight transition-colors duration-300',
          )}
          style={{ color: isActive ? 'var(--text-h)' : 'var(--text)' }}
        >
          {model.name}
        </span>

        {/* Ícones sociais – aparecem no hover */}
        {hasSocial && (
          <div
            className={cn(
              'flex items-center gap-1.5 ml-0.5 transition-all duration-200',
              isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-2 pointer-events-none',
            )}
          >
            {model.social?.instagram && (
              <a
                href={model.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded transition-all duration-150 hover:scale-110"
                style={{ color: 'var(--text)', opacity: 0.6 }}
                title="Instagram"
              >
                <FaInstagram size={10} />
              </a>
            )}
            {model.social?.whatsapp && (
              <a
                href={model.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1 rounded transition-all duration-150 hover:scale-110"
                style={{ color: 'var(--text)', opacity: 0.6 }}
                title="WhatsApp"
              >
                <FaWhatsapp size={10} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Tipo / categoria */}
      <p
        className="mt-1.5 pl-[27px] text-[7px] md:text-[10px] font-medium uppercase tracking-[0.2em]"
        style={{ color: 'var(--text)', opacity: 0.6 }}
      >
        {model.role}
      </p>
    </div>
  );
}
