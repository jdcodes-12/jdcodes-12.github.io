import React from 'react'
import Grid from '@ui/grids/grid.component';
import ArticleCard from '@ui/cards/article-card.component';
import { type Article } from '@types';

export default function ArticleGrid(
  { articles }: { articles: any[] }
) {
  console.log(articles);

  return (
    <Grid>
      {articles?.map((article: any) => 
        <ArticleCard 
          key={article.meta.title}
          article={article.meta}
        />
      )}
    </Grid>
  );
}