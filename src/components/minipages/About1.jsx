import React from 'react'
import { Link } from 'react-router-dom'

const About1 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgb(59_130_246_/_0.22),transparent)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-hero-dark mx-auto max-w-4xl space-y-6 px-6 py-8 text-center sm:px-10 sm:py-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">Quality Staffing Care</p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Delivering Compassionate, <span className="text-blue-400">Reliable</span> &amp; Skilled Care
              Professionals Across the UK
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-200">
              Quality Staffing Care is a leading staffing provider based in Wales, specialising in supplying
              high-quality staff including support workers, care assistants, and senior carers to supported
              living homes, residential care homes, and nursing services. We were founded on a simple mission:
              to improve care quality by connecting dedicated staff with providers who need them—quickly,
              professionally, and ethically. Our team is committed to exceptional service for all your staffing
              needs.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/40 ring-1 ring-white/20 transition hover:from-blue-500 hover:to-indigo-500"
              >
                Work with Us
              </Link>
            </div>
          </div>
        </div>

        <div
          className="glass-panel pointer-events-none absolute -right-2 -top-3 z-20 hidden max-w-[11rem] p-4 sm:block sm:-right-4 sm:max-w-xs"
          aria-hidden="true"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">Match found</div>
              <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Example: qualified nurses for your shift
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_35%_at_100%_0%,rgb(59_130_246_/_0.08),transparent)] dark:bg-[radial-gradient(ellipse_55%_35%_at_100%_0%,rgb(37_99_235_/_0.12),transparent)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="glass-panel max-sm:bg-[var(--glass-bg-strong)] lg:col-span-1 lg:h-fit lg:p-6">
              <span className="glass-panel mb-4 inline-flex rounded-xl px-4 py-2 text-sm font-semibold text-blue-800 ring-1 ring-blue-500/15 dark:text-blue-200 dark:ring-blue-400/20">
                Our Story
              </span>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white lg:text-4xl">
                Building a Legacy of Excellence
              </h2>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-4 text-gray-700 dark:text-slate-300">
                <p className="text-lg leading-relaxed">
                  We understand the pressures care providers face: staff shortages, demanding workloads, strict
                  compliance, and ensuring residents receive continuous, person-centred support. QSC was created
                  to be part of the solution—offering responsive staffing support, trained professionals, and a
                  partnership approach built on trust. Based in Wales, we match qualified care professionals
                  with providers who need reliable cover, from nursing homes to community teams, with local
                  knowledge of compliance expectations.
                </p>
                <p className="text-lg leading-relaxed">
                  Our journey began with a simple mission: to provide exceptional staffing solutions that bridge
                  the gap between talent and opportunity. Today, we continue to build on that foundation with
                  unwavering commitment.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="glass-panel flex max-sm:bg-[var(--glass-bg-strong)] items-start gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100/90 shadow-inner ring-1 ring-blue-200/60 dark:bg-blue-950/50 dark:ring-blue-800/40">
                    <span className="font-bold text-blue-600 dark:text-blue-400">✓</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Quality Assurance</h3>
                    <p className="text-sm text-gray-600 dark:text-slate-400">Rigorous screening and vetting process</p>
                  </div>
                </div>

                <div className="glass-panel flex max-sm:bg-[var(--glass-bg-strong)] items-start gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100/90 shadow-inner ring-1 ring-blue-200/60 dark:bg-blue-950/50 dark:ring-blue-800/40">
                    <span className="font-bold text-blue-600 dark:text-blue-400">✓</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">24/7 Support</h3>
                    <p className="text-sm text-gray-600 dark:text-slate-400">Round-the-clock customer service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About1
