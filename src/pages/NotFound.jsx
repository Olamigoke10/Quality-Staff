import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { SITE_NAME } from '@/lib/site'

const NotFound = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <Helmet>
        <title>Page not found — {SITE_NAME}</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">404</p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">Page not found</h1>
      <p className="mt-4 max-w-md text-gray-600 dark:text-gray-300">
        The page you requested does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Back to home
      </Link>
    </div>
  )
}

export default NotFound
