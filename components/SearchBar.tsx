'use client'
import { useState } from 'react'
export default function SearchBar() {
  const [query, setQuery] = useState('')
  return (
    <div className="p-4 border rounded-lg bg-white">
      <input
        type="text"
        placeholder="rechercher..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <p>Vous cherchez : {query}</p>
    </div>
  )
}