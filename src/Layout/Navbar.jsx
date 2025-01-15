import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';

function Navbar({ darkMode, toggleDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="sticky top-0">
            <nav className="bg-pink-500 dark:bg-gray-950 w-full z-20 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/img/logo_fordarkmood.png" className="h-8" alt="Logo" />
                    </a>

                    <div className="flex items-center space-x-4 md:order-2 rtl:space-x-reverse">
                        {/* Get Started Button */}
                        <button
                            type="button"
                            className="text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-yellow-700 dark:hover:bg-yellow-800 dark:focus:ring-yellow-800"
                        >
                            Get Started
                        </button>

                        {/* Dark Mode Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="text-white p-1 rounded-lg hover:bg-yellow-300 dark:hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                        >
                            {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
                        </button>

                        {/* Hamburger Menu */}
                        <button
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded={menuOpen}
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Links */}
                    <div
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                            menuOpen ? 'block' : 'hidden'
                        }`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-pink-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-pink-500 dark:bg-gray-800 md:dark:bg-gray-950 dark:border-gray-700">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block py-2 px-3 rounded md:p-0 ${
                                        isActive
                                            ? 'text-yellow-700 bg-yellow-200 md:bg-transparent md:text-yellow-500'
                                            : 'text-white'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/docs"
                                className={({ isActive }) =>
                                    `block py-2 px-3 rounded md:p-0 ${
                                        isActive
                                            ? 'text-yellow-700 bg-yellow-200 md:bg-transparent md:text-yellow-500'
                                            : 'text-white'
                                    }`
                                }
                            >
                                Docs
                            </NavLink>
                            <NavLink
                                to="/component"
                                className={({ isActive }) =>
                                    `block py-2 px-3 rounded md:p-0 ${
                                        isActive
                                            ? 'text-yellow-700 bg-yellow-200 md:bg-transparent md:text-yellow-500'
                                            : 'text-white'
                                    }`
                                }
                            >
                                Components
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block py-2 px-3 rounded md:p-0 ${
                                        isActive
                                            ? 'text-yellow-700 bg-yellow-200 md:bg-transparent md:text-yellow-500'
                                            : 'text-white'
                                    }`
                                }
                            >
                                About
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;