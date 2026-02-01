import Image from 'next/image'

export default function AuthorityPreviewSection() {
  return (
    <section className="authority-block section-alt">
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
        <p className="author-name">Dra. Daniela Tres Canassa</p>
        <p className="author-role">Farmacêutica | Consultora Científica</p>
        <h2>Nossa abordagem</h2>
        <p>Baseada em evidências científicas e anos de experiência no setor farmacêutico, nossa consultoria combina rigor técnico com visão estratégica para apoiar sua farmácia.</p>
      </div>
    </section>
  )
}
