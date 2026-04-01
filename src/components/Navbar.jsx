import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
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
    const baseClasses = 'block py-2 px-3 rounded-sm md:p-0 md:border-0 transition-colors duration-200'
    const activeClasses = 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500'
    const inactiveClasses = 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
    
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
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-2 p-4">
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
          <div className="hidden w-full md:block md:w-auto" id="navbar-desktop">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink 
                    to={item.path} 
                    className={getLinkClasses}
                    end={item.end}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile menu - simple show/hide without complex transitions */}
        <div 
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:hidden absolute top-full left-0 right-0 z-50 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-lg`}
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