import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Activity, Clock, HeartHandshake, ShieldCheck, Stethoscope, UserRound } from "lucide-react";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{SITE_NAME} — Healthcare staffing in Wales</title>
        <meta
          name="description"
          content={`${SITE_NAME}: ${SITE_TAGLINE}. Reliable recruitment and workforce cover for care providers and professionals.`}
        />
      </Helmet>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(59_130_246_/_0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgb(37_99_235_/_0.2),transparent)]"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute -right-24 top-24 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-600/15" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-teal-400/15 blur-3xl dark:bg-teal-600/10" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-screen items-center gap-14 py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
            <div className="flex flex-col justify-center space-y-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-4 py-2 text-sm font-medium text-blue-900 shadow-sm backdrop-blur-sm dark:border-blue-500/30 dark:bg-slate-900/80 dark:text-blue-100">
                <HeartHandshake className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden />
                <span className="tracking-wide">24/7 care staffing · Wales &amp; UK</span>
              </div>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white md:text-5xl lg:text-[3.25rem]">
                Your trusted
                <span className="mt-1 block bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600 bg-clip-text text-transparent dark:from-blue-300 dark:via-blue-400 dark:to-indigo-400">
                  staffing partner
                </span>
              </h1>

              <div className="max-w-xl space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 md:text-lg">
                <p>
                  Highly trained, compassionate professionals for supported living, residential care, and
                  nursing services across England and Wales—from emergency cover to long-term placements.
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  {SITE_NAME} connects providers with vetted staff and responsive support when rosters change
                  at short notice.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-800/50">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                    <Clock className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                  <span>
                    <span className="block font-semibold text-slate-900 dark:text-white">24/7 support</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Same-day response</span>
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-800/50">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                    <ShieldCheck className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                  <span>
                    <span className="block font-semibold text-slate-900 dark:text-white">Vetted staff</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Compliance-focused</span>
                  </span>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-800/50">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                    <Activity className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                  <span>
                    <span className="block font-semibold text-slate-900 dark:text-white">Fast matching</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">Roles filled quickly</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-900 to-indigo-600 px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-blue-900/25 transition hover:from-blue-800 hover:to-indigo-500 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Find staff now
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white/80 px-8 py-3.5 text-base font-semibold text-slate-800 backdrop-blur-sm transition hover:border-blue-300 hover:text-blue-800 dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:border-blue-500 dark:hover:text-blue-200"
                >
                  We are hiring
                </Link>
              </div>

              <div className="grid gap-4 border-t border-slate-200/90 pt-8 dark:border-slate-700/90 sm:grid-cols-3">
                {[
                  { title: "Wales-focused", desc: "Local knowledge & compliance-aware matching" },
                  { title: "Vetted professionals", desc: "Rigorous checks before placement" },
                  { title: "Responsive team", desc: "Support when shifts change fast" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-slate-100/80 px-4 py-3 text-center sm:text-left dark:bg-slate-800/60"
                  >
                    <p className="font-semibold text-blue-800 dark:text-blue-300">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image/Illustration */}
            {/* Right Content - Modern Healthcare Staffing Visual */}
            <div className="relative lg:pl-4">
              <div className="relative z-10 rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 backdrop-blur-md dark:border-slate-700/90 dark:bg-slate-900/90 dark:shadow-black/40 dark:ring-white/10 sm:p-8">
                <div className="mb-6">
                  <h3 className="mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                    Example roles we place
                  </h3>
                  <p className="mb-4 text-xs text-slate-500 dark:text-slate-400">
                    Illustrative profiles—not real individuals or availability.
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search roles, specialties, or certifications…"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/80 py-3 pl-10 pr-4 text-slate-900 placeholder-slate-400 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-slate-600 dark:bg-slate-800/80 dark:text-white dark:placeholder-slate-500"
                    />
                    <svg
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Staff Cards Grid */}
                <div className="space-y-3">
                  <div className="flex gap-4 rounded-2xl border border-blue-100/90 bg-gradient-to-br from-blue-50/90 to-white p-4 transition hover:border-blue-200 dark:border-blue-900/40 dark:from-blue-950/40 dark:to-slate-900/50 dark:hover:border-blue-800">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-md shadow-blue-500/25">
                      <Stethoscope className="h-7 w-7" strokeWidth={2} aria-hidden />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Registered Nurse (RN)
                        </h4>
                        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                          Available
                        </span>
                      </div>
                      <p className="text-sm leading-snug text-slate-600 dark:text-slate-400">
                        Acute care, monitoring, and evidence-based clinical support—reliable in fast-paced
                        settings.
                      </p>
                      <div className="mt-2 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <span>5+ years</span>
                        <span className="text-amber-600 dark:text-amber-400">★ 4.9</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl border border-emerald-100/90 bg-gradient-to-br from-emerald-50/90 to-white p-4 transition hover:border-emerald-200 dark:border-emerald-900/40 dark:from-emerald-950/30 dark:to-slate-900/50 dark:hover:border-emerald-800">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25">
                      <Activity className="h-7 w-7" strokeWidth={2} aria-hidden />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Emergency Medicine Physician
                        </h4>
                        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                          Available
                        </span>
                      </div>
                      <p className="text-sm leading-snug text-slate-600 dark:text-slate-400">
                        High-acuity environments, rapid assessment, and coordinated emergency care support.
                      </p>
                      <div className="mt-2 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <span>8+ years</span>
                        <span className="text-amber-600 dark:text-amber-400">★ 4.8</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 rounded-2xl border border-violet-100/90 bg-gradient-to-br from-violet-50/90 to-white p-4 transition hover:border-violet-200 dark:border-violet-900/40 dark:from-violet-950/30 dark:to-slate-900/50 dark:hover:border-violet-800">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-md shadow-violet-500/25">
                      <UserRound className="h-7 w-7" strokeWidth={2} aria-hidden />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Licensed Practical Nurse (LPN)
                        </h4>
                        <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-900 dark:bg-amber-950/50 dark:text-amber-300">
                          Busy
                        </span>
                      </div>
                      <p className="text-sm leading-snug text-slate-600 dark:text-slate-400">
                        Long-term care, rehabilitation, and hands-on support with strong communication and
                        continuity.
                      </p>
                      <div className="mt-2 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <span>6+ years</span>
                        <span className="text-amber-600 dark:text-amber-400">★ 4.7</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-600/80">
                  <div className="grid grid-cols-1 gap-4 text-center text-sm text-slate-600 dark:text-slate-400 sm:grid-cols-3 sm:gap-3">
                    <div className="rounded-xl bg-slate-50/90 py-3 dark:bg-slate-800/50">
                      <span className="font-semibold text-blue-700 dark:text-blue-400">Cover</span>
                      <p className="mt-1 text-xs sm:text-sm">Ad hoc &amp; planned shifts</p>
                    </div>
                    <div className="rounded-xl bg-slate-50/90 py-3 dark:bg-slate-800/50">
                      <span className="font-semibold text-emerald-700 dark:text-emerald-400">Sectors</span>
                      <p className="mt-1 text-xs sm:text-sm">Residential, community &amp; clinical</p>
                    </div>
                    <div className="rounded-xl bg-slate-50/90 py-3 dark:bg-slate-800/50">
                      <span className="font-semibold text-violet-700 dark:text-violet-400">Next step</span>
                      <p className="mt-1">
                        <Link
                          to="/contact"
                          className="font-medium text-blue-700 underline decoration-blue-700/30 underline-offset-2 transition hover:text-blue-800 dark:text-blue-400 dark:decoration-blue-400/30 dark:hover:text-blue-300"
                        >
                          Contact the team
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-2 -top-3 z-20 max-w-[11.5rem] rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-xl shadow-slate-900/10 backdrop-blur-sm dark:border-slate-600 dark:bg-slate-900/95 sm:-right-4 sm:max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Match found</p>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                      Example: nurses for your shift
                    </p>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -left-6 -top-6 h-32 w-32 rounded-full bg-blue-300/30 blur-2xl dark:bg-blue-600/20" />
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-violet-300/25 blur-2xl dark:bg-violet-600/15" />
              <div className="pointer-events-none absolute -left-4 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-teal-300/20 blur-2xl dark:bg-teal-600/10" />
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 opacity-60"
          aria-hidden="true"
        >
          <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Scroll
          </span>
          <div className="flex h-9 w-5 justify-center rounded-full border-2 border-slate-300 dark:border-slate-600">
            <div className="mt-1.5 h-2 w-0.5 animate-pulse rounded-full bg-slate-400 dark:bg-slate-500" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
