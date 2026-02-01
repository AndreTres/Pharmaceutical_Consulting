import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="DTC Consultoria Farmacêutica"
          width={120}
          height={48}
          className="logo"
        />
        <span className="brand-text">DTC Consultoria Farmacêutica</span>
      </Link>
    </header>
  )
}
