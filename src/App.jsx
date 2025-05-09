import React from "react"
import GameCanvas from "./components/GameCanvas"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="fixed top-0 left-0 w-full bg-yellow-100 text-yellow-800 text-center py-2 text-sm z-50">
        🚧 This portfolio is a work in progress – updates coming soon!
      </div>
      <div className="pt-12">
        <Navbar />
        <section
          id="game"
          className="flex justify-center items-center min-h-screen"
        >
          <GameCanvas />
        </section>
      </div>
    </div>
  )
}

export default App
