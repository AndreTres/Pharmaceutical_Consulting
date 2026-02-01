import Head from 'next/head'
import ContactIntroSection from '../components/sections/ContactIntroSection'
import ContactMethodsSection from '../components/sections/ContactMethodsSection'

export default function Contato() {
  return (
    <>
      <Head>
        <title>Contato | DTC Consultoria Farmacêutica</title>
        <meta name="description" content="Entre em contato com a DTC Consultoria Farmacêutica por WhatsApp ou e-mail. Atendimento para farmácias de manipulação." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ContactIntroSection />
        <ContactMethodsSection />
      </main>
    </>
  )
}
