import Head from 'next/head'
import ServicesIntroSection from '../components/sections/ServicesIntroSection'
import ServicesListSection from '../components/sections/ServicesListSection'
import ProcessSection from '../components/sections/ProcessSection'
import DirectCTASection from '../components/sections/DirectCTASection'

export default function Servicos() {
  return (
    <>
      <Head>
        <title>Serviços | DTC Consultoria Farmacêutica</title>
        <meta name="description" content="Informes científicos, sugestões de fórmulas, otimização de estoque, capacitação técnica e posicionamento científico e comercial para farmácias de manipulação." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ServicesIntroSection />
        <ServicesListSection />
        <ProcessSection />
        <DirectCTASection />
      </main>
    </>
  )
}
