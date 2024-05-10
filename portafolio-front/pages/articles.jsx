import React from 'react';
import ArticleCard from '../components/ArticleCard'; // Importa el componente ArticleCard

export async function getStaticProps() {
  const res = await fetch(
    'https://dev.to/api/articles/me/published?per_page=6',
    {
      headers: {
        'api-key': process.env.DEV_TO_API_KEY,
      },
    }
  );

  const articlesData = await res.json();
  const articles = Array.isArray(articlesData) ? articlesData : [];

  return {
    props: { title: 'Articles', articles },
    revalidate: 60,
  };
}

// Exporta el componente principal
export default function Articles({ articles }) {
  return (
    <>
      <h1>Articles</h1>
      <div>
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}
