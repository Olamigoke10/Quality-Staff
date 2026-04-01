import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SITE_EMAIL, SITE_NAME, SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from '@/lib/site'

const Contact = () => {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()
    const subject = encodeURIComponent(`${SITE_NAME} enquiry from ${name || 'website'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )
    window.location.href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact — {SITE_NAME}</title>
        <meta
          name="description"
          content={`Get in touch with ${SITE_NAME} for healthcare staffing in Wales. Phone, email, or send us a message.`}
        />
      </Helmet>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgb(59_130_246_/_0.18),transparent)] dark:bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgb(37_99_235_/_0.22),transparent)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl dark:bg-blue-600/12"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Talk to our team
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Whether you need cover for a shift or you are a care professional looking for roles across
            Wales, we are here to help.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="glass-panel group block max-sm:bg-[var(--glass-bg-strong)] p-6 transition hover:ring-2 hover:ring-blue-400/25"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Phone
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900 transition group-hover:text-blue-800 dark:text-white dark:group-hover:text-blue-300">
                {SITE_PHONE_DISPLAY}
              </p>
            </a>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="glass-panel group block max-sm:bg-[var(--glass-bg-strong)] p-6 transition hover:ring-2 hover:ring-blue-400/25"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Email
              </p>
              <p className="mt-2 break-all text-lg font-semibold text-slate-900 transition group-hover:text-blue-800 dark:text-white dark:group-hover:text-blue-300">
                {SITE_EMAIL}
              </p>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-panel mt-12 max-sm:bg-[var(--glass-bg-strong)] space-y-6 p-8"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Send a message</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Submitting opens your email app with your message pre-filled. You can also email us
              directly at the address above.
            </p>
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                className="glass-input mt-1.5 w-full px-4 py-3 text-slate-900 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="glass-input mt-1.5 w-full px-4 py-3 text-slate-900 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                className="glass-input mt-1.5 w-full px-4 py-3 text-slate-900 transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-900 to-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-900/30 ring-1 ring-white/20 transition hover:from-blue-800 hover:to-indigo-500 sm:w-auto"
            >
              Open in email
            </button>
            {sent && (
              <p className="text-sm text-green-600 dark:text-green-400" role="status">
                If your mail app did not open, copy your message and email us at {SITE_EMAIL}.
              </p>
            )}
          </form>

          <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
            <Link to="/" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
              Back to home
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Contact
