import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SITE_NAME } from '@/lib/site'

const tiers = [
  {
    name: 'Ad hoc cover',
    description: 'Short-notice shifts and single-day cover for homes and clinics.',
    bullets: ['Rapid matching', 'Vetted professionals', 'Flexible cancellation terms'],
    cta: 'Discuss your needs',
  },
  {
    name: 'Block booking',
    description: 'Regular patterns and recurring shifts at predictable rates.',
    bullets: ['Priority allocation', 'Consistent teams where possible', 'Volume discounts'],
    featured: true,
    cta: 'Request a quote',
  },
  {
    name: 'Project & transition',
    description: 'Extra capacity during CQC visits, openings, or service changes.',
    bullets: ['Planning support', 'Dedicated coordinator', 'Tailored SLAs'],
    cta: 'Plan with us',
  },
]

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing & packages — {SITE_NAME}</title>
        <meta
          name="description"
          content={`Flexible healthcare staffing packages from ${SITE_NAME}. Ad hoc cover, block bookings, and project support across Wales.`}
        />
      </Helmet>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,rgb(59_130_246_/_0.16),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-15%,rgb(37_99_235_/_0.2),transparent)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-20 left-10 h-64 w-64 rounded-full bg-indigo-400/12 blur-3xl dark:bg-indigo-600/10"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Pricing
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Packages that fit how you work
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Every provider is different. We quote fairly based on role, location, urgency, and volume.
              Below is how we typically structure engagements—final rates are agreed after a short call.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3 lg:items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col p-8 transition ${
                  tier.featured
                    ? 'glass-panel max-sm:bg-[var(--glass-bg-strong)] ring-2 ring-blue-400/35 shadow-xl shadow-blue-900/15 dark:shadow-blue-950/50 dark:ring-blue-400/30'
                    : 'glass-panel max-sm:bg-[var(--glass-bg-strong)] hover:ring-1 hover:ring-slate-300/50 dark:hover:ring-slate-500/30'
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-900 to-indigo-600 px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-blue-900/35 ring-1 ring-white/25">
                    Popular
                  </span>
                )}
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">{tier.name}</h2>
                <p className="mt-3 flex-1 text-slate-600 dark:text-slate-300">{tier.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-green-600 dark:text-green-400" aria-hidden>
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition ${
                    tier.featured
                      ? 'bg-gradient-to-r from-blue-900 to-indigo-600 text-white shadow-lg shadow-blue-900/30 ring-1 ring-white/20 hover:from-blue-800 hover:to-indigo-500'
                      : 'border border-slate-200/80 bg-white/40 text-slate-900 shadow-sm backdrop-blur-md hover:border-blue-300/60 hover:bg-white/60 dark:border-slate-600/80 dark:bg-slate-800/40 dark:text-white dark:hover:border-blue-500/40 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
            <Link to="/" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
              Back to home
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Pricing
