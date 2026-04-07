import SearchBar from '@/components/SearchBar'
import ArticleList from '@/components/ArticleList'
import ProfileCard from '@/components/ProfileCard'
import RegisterForm from '@/components/RegisterForm'
import Dropdown from '@/components/Dropdown'
import Image from 'next/image'
import { Suspense } from 'react'
import Skeleton from '@/components/Skeleton'


export default function Home() {
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
          <Dropdown /> {/* Notre menu accessible du Jour 9 */}
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
          </div>

          {/* --- COLONNE DROITE --- */}
          <div className="space-y-8">
             <section className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">S&apos;inscrire</h2>
              <RegisterForm />
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Actualités</h2>
              <Suspense fallback={<Skeleton />}>
              <ArticleList />
              </Suspense>
            </section>
          </div>

        </div>

      </div>
    </main>
  )
}