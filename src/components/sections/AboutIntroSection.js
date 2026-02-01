import Image from 'next/image'

export default function AboutIntroSection() {
  return (
    <section className="authority-block section">
      <div className="profile-image-wrap">
        <Image
          src="/images/profile.png"
          alt="Dra. Daniela Tres Canassa — Farmacêutica e Consultora Científica"
          width={160}
          height={160}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="authority-content">
        <h1>Sobre a DTC Consultoria Farmacêutica</h1>
        <p className="author-name">Dra. Daniela Tres Canassa</p>
        <p className="author-role">Farmacêutica | Consultora Científica</p>
        <p>Conheça nossa missão e o que nos move a oferecer consultoria de excelência para farmácias de manipulação e o setor farmacêutico.</p>
      </div>
    </section>
  )
}
