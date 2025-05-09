// src/components/Navbar.jsx
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full p-4 z-40">
      <ul className="flex justify-center space-x-8 text-lg">
        <li>
          <a href="#game" className="hover:text-yellow-400 transition">
            Game
          </a>
        </li>
      </ul>
    </nav>
  )
}
