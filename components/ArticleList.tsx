interface Article{
    id: number;
    title: string;
}

export default async function ArticleList(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    const articles: Article[] = await response.json();
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

