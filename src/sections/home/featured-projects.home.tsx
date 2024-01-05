import React from 'react';
import ArticleCard from '@ui/cards/article-card.component';
import { ARTICLES } from '@config/mock-data';

export default function FeaturedProjects() {
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
          My Projects
        </h2>
        <div className='grid grid-cols-2 gap-x-16'>
          <ArticleCard article={ARTICLES[0]}/>
          <ArticleCard article={ARTICLES[1]}/>
        </div>
    </section>
  );
}
