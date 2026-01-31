import Head from 'next/head'
import AboutIntroSection from '../components/sections/AboutIntroSection'
import ScientificVisionSection from '../components/sections/ScientificVisionSection'
import PurposeSection from '../components/sections/PurposeSection'
import SoftCTASection from '../components/sections/SoftCTASection'

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre | DTC Consultoria Farmacêutica</title>
        <meta name="description" content="Conheça a DTC Consultoria Farmacêutica, nossa visão científica e propósito" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AboutIntroSection />
        <ScientificVisionSection />
        <PurposeSection />
        <SoftCTASection />
      </main>
    </>
  )
}
