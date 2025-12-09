import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import QSC from '../assets/QSC.svg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-md sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={closeMenu}>
            <img src={QSC} className="h-16" alt="QSC Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-blue-600">Quality Staff Care</span>
          </NavLink>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-colors" 
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
            className="fixed inset-0  bg-opacity-50 z-40 md:hidden"
            onClick={closeMenu}
          />
        )}
      </nav>
    </>
  )
}

export default Navbar