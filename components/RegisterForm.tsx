'use client'

import { useState } from 'react'

export default function RegisterForm() {
  const [message, setMessage] = useState("")

  // Cette fonction simule l'envoi de données au serveur
  async function handleRegister(formData: FormData) {
    const email = formData.get("email")
    
    // On simule une attente réseau
    await new Promise(resolve => setTimeout(resolve, 500))
    
    setMessage(`Merci ! Inscription réussie pour ${email}`)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    await handleRegister(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg bg-white shadow">
      <h2 className="text-xl font-bold mb-4">Rejoindre l&apos;Élite</h2>
      <input 
        name="email" 
        type="email" 
        placeholder="votre@email.com" 
        required 
        className="w-full p-2 border rounded mb-2"
      />
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
        S&apos;inscrire
      </button>
      {message && <p className="mt-2 text-green-600 font-medium" data-testid="success-msg">{message}</p>}
    </form>
  )
}