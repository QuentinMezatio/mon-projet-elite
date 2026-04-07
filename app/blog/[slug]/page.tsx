import Link from 'next/link'

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Article : {params.slug}</h1>
      <p className="mt-4">Vous lisez actuellement l&apos;article sur {params.slug}.</p>
      <Link href="/" className="text-blue-500 underline">Retour à l&apos;accueil</Link>
    </main>
  )
}