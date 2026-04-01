import React from 'react'
import { Link } from 'react-router-dom'
import QSCWhiteBG from '@/assets/QSCWhiteBG.svg'
import { SITE_EMAIL, SITE_NAME, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '@/lib/site'

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md text-center md:text-left">
            <div className="flex flex-col items-center gap-3 md:items-start">
              <img src={QSCWhiteBG} className="h-14 w-auto" alt="" />
              <span className="text-lg font-semibold text-white">{SITE_NAME}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Professional workforce solutions for care providers across Wales and the wider UK. We deliver
              reliable, compliant, vetted staff for temporary, contract, and longer-term roles—connecting
              dedicated care professionals with teams who need dependable cover.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              <a href={`tel:${SITE_PHONE_TEL}`} className="font-medium text-white hover:text-blue-400">
                {SITE_PHONE_DISPLAY}
              </a>
              <span className="mx-2 text-gray-600" aria-hidden="true">
                ·
              </span>
              <a href={`mailto:${SITE_EMAIL}`} className="break-all font-medium text-white hover:text-blue-400">
                {SITE_EMAIL}
              </a>
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:justify-end">
              <li>
                <Link className="text-gray-400 transition hover:text-white" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 transition hover:text-white" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 transition hover:text-white" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 transition hover:text-white" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 transition hover:text-white" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} {SITE_NAME}. Serving care providers and professionals in Wales.
        </p>
      </div>
    </footer>
  )
}

export default Footer
