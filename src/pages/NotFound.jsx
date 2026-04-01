import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SITE_NAME } from '@/lib/site'

const NotFound = () => {
  return (
    <div className="page-gradient-shell relative min-h-[70vh] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgb(59_130_246_/_0.12),transparent)] dark:bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgb(37_99_235_/_0.18),transparent)]"
        aria-hidden="true"
      />
      <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
        <Helmet>
          <title>Page not found — {SITE_NAME}</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="glass-panel max-w-md rounded-2xl p-10 sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">404</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">Page not found</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            The page you requested does not exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-blue-900 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/25 ring-1 ring-white/20 transition hover:from-blue-800 hover:to-indigo-500 hover:shadow-xl"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
