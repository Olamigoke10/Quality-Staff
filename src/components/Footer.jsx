import React from 'react'
import { Link } from 'react-router-dom'
import QSCWhiteBG from '@/assets/QSCWhiteBG.svg'
import { SITE_EMAIL, SITE_NAME, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '@/lib/site'

const Footer = () => {
  return (
    <footer className="relative border-t border-slate-800/80 bg-gradient-to-b from-slate-950 to-slate-900 text-slate-300">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md text-center md:text-left">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <img src={QSCWhiteBG} className="h-16 w-auto opacity-95" alt="" />
              <span className="text-lg font-semibold tracking-tight text-white">{SITE_NAME}</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Professional workforce solutions for care providers across Wales and the wider UK. We deliver
              reliable, compliant, vetted staff for temporary, contract, and longer-term roles—connecting
              dedicated care professionals with teams who need dependable cover.
            </p>
            <p className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm md:justify-start">
              <a
                href={`tel:${SITE_PHONE_TEL}`}
                className="font-medium text-white transition hover:text-blue-300"
              >
                {SITE_PHONE_DISPLAY}
              </a>
              <span className="text-slate-600" aria-hidden="true">
                ·
              </span>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="break-all font-medium text-white transition hover:text-blue-300"
              >
                {SITE_EMAIL}
              </a>
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-2 gap-y-2 text-sm md:justify-end">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/blog', label: 'Blog' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    className="rounded-lg px-3 py-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
                    to={to}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 border-t border-slate-800/90 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {SITE_NAME}. Serving care providers and professionals in Wales.
        </p>
      </div>
    </footer>
  )
}

export default Footer
