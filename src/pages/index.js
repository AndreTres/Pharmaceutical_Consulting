import Head from 'next/head'
import HeroSection from '../components/sections/HeroSection'
import TargetAudienceSection from '../components/sections/TargetAudienceSection'
import AuthorityPreviewSection from '../components/sections/AuthorityPreviewSection'
import ServicesPreviewSection from '../components/sections/ServicesPreviewSection'
import DifferentialsSection from '../components/sections/DifferentialsSection'
import FinalCTASection from '../components/sections/FinalCTASection'

export default function Home() {
  return (
    <>
      <Head>
        <title>DTC Consultoria Farmacêutica — Estratégia • Ciência • Resultado</title>
        <meta name="description" content="Consultoria farmacêutica especializada em farmácias de manipulação. Suporte técnico-científico, estratégico e posicionamento com base em evidências." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroSection />
        <TargetAudienceSection />
        <AuthorityPreviewSection />
        <ServicesPreviewSection />
        <DifferentialsSection />
        <FinalCTASection />
      </main>
    </>
  )
}
