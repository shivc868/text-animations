import Link from 'next/link'

const navLinks = [
  {href: '#spotlights', label: 'Spotlights'},
  {href: '#events', label: 'Events'},
  {href: '#about', label: 'About'},
] as const

export function Header() {
  return (
    <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur md:flex-row md:items-center md:justify-between">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-400">
          Black Spotlight
        </p>
        <p className="text-2xl font-semibold leading-tight text-white">
          Amplifying creative innovators shaping culture.
        </p>
      </div>

      <nav className="flex flex-wrap items-center gap-4 text-sm text-zinc-300">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} className="transition hover:text-white">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
