import { HeroSection } from '@/components/sections/home/HeroSection'
import { ApparelShowcaseSection } from '@/components/sections/home/CardShowcaseSection'

export function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <ApparelShowcaseSection
  title={
    <>
      Qualidade Profissional em Cada
      <br />
      Camisa Personalizada
    </>
  }
  description="Produzimos camisas personalizadas em tecido Dry Fit com sublimação total para empresas, eventos, equipes esportivas, escolas, igrejas e excursões. Estampas vibrantes, conforto e durabilidade em cada peça."
  buttonText="Solicitar Meu Orçamento"
  buttonLink="https://wa.me/5585SEUNUMERO"
  imageUrl1="https://loremflickr.com/600/400/shirt?random=1"
  imageUrl2="https://loremflickr.com/600/400/shirt?random=2"
  imageUrl3="https://loremflickr.com/600/400/shirt?random=3"
/>
    </div>
  )
}
