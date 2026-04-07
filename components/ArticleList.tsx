'use client'

import { useState, useEffect } from 'react'

interface Article{
    id: number;
    title: string;
}

export default function ArticleList(){
    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
                const data: Article[] = await response.json();
                setArticles(data)
            } catch (error) {
                console.error('Erreur lors du chargement des articles:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchArticles()
    }, [])

    if (loading) {
        return (
            <div className="p-4 border rounded-lg shadow-sm bg-white">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Derniers Articles</h2>
                <p>Chargement...</p>
            </div>
        )
    }

    return(
        <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Derniers Articles</h2>
      <ul className="space-y-2">
        {articles.map((article) => (
          <li key={article.id} className="p-2 bg-blue-50 rounded border-l-4 border-blue-500">
            {article.title}
          </li>
        ))}
      </ul>
    </div>

    );
}

