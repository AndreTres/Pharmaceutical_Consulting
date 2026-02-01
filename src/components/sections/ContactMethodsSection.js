export default function ContactMethodsSection() {
  const whatsappNumber = '5511992304290'
  const whatsappLink = `https://wa.me/${whatsappNumber}`
  const email = 'dr.danielcanassa@gmail.com'

  return (
    <section className="section section-alt contact-methods">
      <h2>Como nos encontrar</h2>
      <p>WhatsApp e e-mail disponíveis para atendimento.</p>
      <p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp: (11) 99230-4290</a>
      </p>
      <p>
        <a href={`mailto:${email}`}>E-mail: {email}</a>
      </p>
    </section>
  )
}
