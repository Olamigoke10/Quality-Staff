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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              Pricing
            </p>
            <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
              Packages that fit how you work
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Every provider is different. We quote fairly based on role, location, urgency, and volume.
              Below is how we typically structure engagements—final rates are agreed after a short call.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-2xl border p-8 shadow-sm ${
                  tier.featured
                    ? 'border-blue-500 bg-white ring-2 ring-blue-500 dark:bg-slate-800'
                    : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800'
                }`}
              >
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
                  className={`mt-8 block w-full rounded-xl py-3 text-center text-sm font-semibold transition ${
                    tier.featured
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border border-slate-300 text-slate-900 hover:bg-slate-50 dark:border-slate-600 dark:text-white dark:hover:bg-slate-700'
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
