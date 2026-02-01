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
        <meta name="description" content="Conheça a Dra. Daniela Tres Canassa e a DTC Consultoria Farmacêutica: visão científica, propósito e missão para o setor farmacêutico." />
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
