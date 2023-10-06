import Link from 'next/link'
import { HeaderProps } from '../types/Header.types'

const Header = ({ dark, handleSwitchTheme }: HeaderProps) => {
  return (
    <header>
      <nav
        className={`bg-white border-gray-200 px-2 lg:px-4 py-2.5 ${
          dark ? 'dark:bg-gray-800' : ''
        } border-b`}
      >
        <div className="flex flex-wrap justify-between items-center">
          <Link href="/">
            <div className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Bookstore
              </span>
            </div>
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              onClick={handleSwitchTheme}
              className="relative inline-flex items-center"
              aria-label="Toggle theme"
            >
              <input
                type="checkbox"
                className="sr-only peer cursor-pointer"
                checked={dark}
                onChange={() => {}}
                aria-hidden="true"
              />
              <div
                className={`cursor-pointer w-11 h-6 ${
                  dark ? 'bg-gray-700' : 'bg-gray-200'
                } rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 ${
                  dark ? 'dark:peer-focus:ring-blue-800' : ''
                } dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${
                  dark ? 'dark:border-gray-600' : ''
                } peer-checked:bg-blue-600`}
              />
            </button>
            <span
              className={`ml-3 mr-5 text-sm font-medium ${
                dark ? 'text-gray-300' : 'text-gray-900'
              } hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-3 py-2 lg:py-2.5 ${
                dark ? 'dark:hover:bg-gray-700 dark:focus:ring-gray-800' : ''
              }`}
            >
              {dark ? 'Dark' : 'Light'} mode
            </span>
            <div
              className={`relative w-10 h-10 overflow-hidden ${
                dark ? 'bg-gray-600' : 'bg-gray-100'
              } rounded-full`}
            >
              <svg
                className={`absolute w-12 h-12 ${
                  dark ? 'text-gray-400' : 'text-gray-800'
                } -left-1`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span
              className={`text-${
                dark ? 'white' : 'gray-800'
              } hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-3 py-2 lg:py-2.5 ${
                dark ? 'dark:hover:bg-gray-700 dark:focus:ring-gray-800' : ''
              }`}
            >
              John Doe
            </span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
