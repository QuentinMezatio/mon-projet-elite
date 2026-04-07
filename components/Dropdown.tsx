'use client'

import { useState } from 'react'

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block text-left p-4">
      {/* aria-expanded dit au lecteur d'écran si le menu est ouvert ou fermé */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:ring-4"
      >
        Options du compte
      </button>

      {isOpen && (
        <ul 
          role="menu" 
          className="absolute mt-2 w-48 bg-white border rounded shadow-lg z-10"
        >
          <li role="none">
            <a href="#profile" role="menuitem" className="block px-4 py-2 hover:bg-gray-100">Mon Profil</a>
          </li>
          <li role="none">
            <a href="#settings" role="menuitem" className="block px-4 py-2 hover:bg-gray-100">Paramètres</a>
          </li>
        </ul>
      )}
    </div>
  )
}