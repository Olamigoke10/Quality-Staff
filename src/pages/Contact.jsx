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
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
            Talk to our team
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Whether you need cover for a shift or you are a care professional looking for roles across
            Wales, we are here to help.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <a
              href={`tel:${SITE_PHONE_TEL}`}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-500"
            >
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Phone</p>
              <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">
                {SITE_PHONE_DISPLAY}
              </p>
            </a>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-blue-500"
            >
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Email</p>
              <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white break-all">
                {SITE_EMAIL}
              </p>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800"
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
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
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
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
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
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
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
