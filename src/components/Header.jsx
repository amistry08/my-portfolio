import React from "react"

function Header() {
  return (
    <header className="bg-white fixed shadow-md w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">MyPortfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-700 hover:text-blue-500">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
