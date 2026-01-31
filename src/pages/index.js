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
        <title>DTC Consultoria Farmacêutica</title>
        <meta name="description" content="Consultoria farmacêutica especializada em Farmácias de Manipulação" />
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
