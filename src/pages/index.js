import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>DTC Consultoria Farmacêutica</title>
        <meta name="description" content="Consultoria farmacêutica especializada em Farmácias de Manipulação" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <main className="main">
          <h1 className="title">DTC Consultoria Farmacêutica</h1>
          <p className="subtitle">Estratégia • Ciência • Resultados</p>
          {/* Seções futuras serão inseridas aqui */}
        </main>
      </div>
    </>
  )
}
