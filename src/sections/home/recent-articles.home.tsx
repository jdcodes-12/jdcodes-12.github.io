import React from 'react'
import ArticleGrid from '@ui/grids/article-grid.component';
import { ARTICLES } from '@config/mock-data';

export default function RecentArticles() {
  return (
    <section className='space-y-16'>
        <h2 
          className='
            text-8xl
            text-primary
            font-bold
            after:content-["."]
          '
        >
          Recent Posts
        </h2>
        <ArticleGrid articles={ARTICLES} />
    </section>
  );
}
