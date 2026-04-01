import React from 'react'
import { Link } from 'react-router-dom'

const About1 = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-800 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">Quality Staffing Care</p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Delivering Compassionate, <span className="text-blue-400">Reliable</span> &amp; Skilled Care
              Professionals Across the UK
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300">
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
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3 font-medium text-white shadow-lg transition-colors duration-200 hover:bg-blue-700"
              >
                Work with Us
              </Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -right-4 -top-4 z-20 max-w-xs rounded-2xl border border-gray-100 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-gray-800">
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
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-1">
              <span className="mb-4 inline-block rounded-lg bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Our Story
              </span>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
                Building a Legacy of Excellence
              </h2>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-4 text-gray-700">
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
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">Quality Assurance</h3>
                    <p className="text-sm text-gray-600">Rigorous screening and vetting process</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <span className="font-bold text-blue-600">✓</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">24/7 Support</h3>
                    <p className="text-sm text-gray-600">Round-the-clock customer service</p>
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
