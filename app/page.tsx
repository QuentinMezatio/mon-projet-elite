'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import SearchBar from '@/components/SearchBar'
// ArticleList is dynamically imported to avoid SSR hydration issues
const ArticleList = dynamic(() => import('@/components/ArticleList'), {
  loading: () => <Skeleton />
})
import ProfileCard from '@/components/ProfileCard'
import RegisterForm from '@/components/RegisterForm'
import Dropdown from '@/components/Dropdown'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Skeleton from '@/components/Skeleton'

export default function Home() {
  // État pour capturer le texte de la nouvelle tâche
  const [newTask, setNewTask] = useState('')

  // Fonction pour envoyer la donnée à Supabase
  const handleAddData = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!newTask.trim()) return

    const { data, error } = await supabase
      .from('tasks')
      .insert([{ title: newTask, is_completed: false }])
      .select()

    if (error) {
      console.error("Erreur Supabase :", error.message)
      alert("Erreur lors de l'envoi")
    } else {
      console.log("Succès ! Tâche ajoutée :", data)
      setNewTask('') // Vide le champ après l'envoi
      alert("Donnée enregistrée dans la base de données !")
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8 text-gray-900">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* --- HEADER --- */}
        <header className="flex justify-between items-center bg-white p-6 rounded-2xl shadow-sm">
          <div className="flex items-center gap-4">
             <Image 
                src="/next.svg" 
                alt="Logo" 
                width={100} 
                height={20} 
                priority 
              />
             <h1 className="text-2xl font-extrabold text-blue-700">Elite Project</h1>
          </div>
          <Dropdown />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* --- COLONNE GAUCHE --- */}
          <div className="space-y-8">
            <section className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Profil</h2>
              <ProfileCard name="Murei" role="Administratrice" />
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Recherche</h2>
              <SearchBar />
            </section>

            {/* --- NOUVELLE SECTION : TEST SUPABASE --- */}
            <section className="bg-blue-50 p-6 rounded-2xl shadow-sm border border-blue-200">
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-500 mb-4">Ajouter à la base</h2>
              <div className="space-y-3">
                <input 
                  type="text" 
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Ex: Apprendre Next.js"
                  className="w-full p-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button 
                  onClick={handleAddData}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
                >
                  Envoyer à Supabase
                </button>
              </div>
            </section>
          </div>

          {/* --- COLONNE DROITE --- */}
          <div className="space-y-8">
             <section className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">S&apos;inscrire</h2>
              <RegisterForm />
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Actualités</h2>
              <ArticleList />
            </section>
          </div>

        </div>

      </div>
    </main>
  )
}