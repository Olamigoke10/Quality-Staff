import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import QSC from '@/assets/QSC.svg'
import { SITE_NAME } from '@/lib/site'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    if (typeof document === 'undefined') return false
    return document.documentElement.classList.contains('dark')
  })

  useEffect(() => {
    const stored = localStorage.getItem('qsc-theme')
    let enableDark = false
    if (stored === 'dark') enableDark = true
    else if (stored === 'light') enableDark = false
    else enableDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.classList.toggle('dark', enableDark)
    setDark(enableDark)
  }, [])

  const toggleDark = () => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('qsc-theme', next ? 'dark' : 'light')
    setDark(next)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const getLinkClasses = ({ isActive }) => {
    const baseClasses =
      'block rounded-lg py-2.5 px-3 text-[15px] font-medium transition-colors duration-200 md:inline-block md:rounded-full md:py-2 md:px-4 md:text-sm'
    const activeClasses =
      'bg-blue-700 text-white md:bg-blue-50 md:text-blue-900 dark:bg-blue-950/50 dark:text-blue-200 md:dark:bg-blue-950/60 md:dark:text-blue-300'
    const inactiveClasses =
      'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10 md:text-slate-600 md:hover:bg-slate-100/90 md:hover:text-blue-800 dark:md:text-slate-300 dark:md:hover:bg-white/10 dark:md:hover:text-white'
    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
  }

  const navItems = [
    { path: '/', label: 'Home', end: true },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/pricing', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 shadow-sm shadow-slate-900/5 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80 dark:shadow-black/20">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5">
          <NavLink to="/" className="flex min-w-0 items-center space-x-3 rtl:space-x-reverse" onClick={closeMenu}>
            <img src={QSC} className="h-14 w-auto shrink-0 sm:h-16" alt="" />
            <span className="max-w-[min(12rem,42vw)] truncate text-lg font-semibold text-blue-900 dark:text-white sm:max-w-none sm:whitespace-nowrap sm:text-2xl">
              {SITE_NAME}
            </span>
          </NavLink>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleDark}
              className="inline-flex rounded-lg p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-mobile"
              aria-expanded={isMenuOpen}
            >
            <span className="sr-only">Open main menu</span>
            {!isMenuOpen ? (
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            ) : (
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            )}
            </button>
          </div>

          {/* Desktop menu - always visible on md screens and up */}
          <div className="hidden w-full items-center gap-2 md:flex md:w-auto" id="navbar-desktop">
            <ul className="mr-2 flex flex-col gap-0.5 p-4 md:mr-0 md:flex-row md:items-center md:gap-1 md:p-0">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className={getLinkClasses} end={item.end}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="ml-1 hidden shrink-0 rounded-full bg-gradient-to-r from-blue-900 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-900/25 transition hover:from-blue-800 hover:to-indigo-500 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:inline-flex"
            >
              Enquire
            </Link>
          </div>
        </div>

        {/* Mobile menu - simple show/hide without complex transitions */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute left-0 right-0 top-full z-50 border-b border-slate-200/80 bg-white/95 shadow-lg shadow-slate-900/10 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95 md:hidden`}
          id="navbar-mobile"
        >
          <ul className="font-medium flex flex-col p-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => 
                    `block py-3 px-4 rounded-lg transition-colors duration-200 ${
                      isActive 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 border-l-4 border-blue-700' 
                        : 'text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 border-l-4 border-transparent'
                    }`
                  }
                  end={item.end}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay for mobile menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </nav>
    </>
  )
}

export default Navbar