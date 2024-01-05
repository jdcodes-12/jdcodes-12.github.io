import React from 'react'
import Grid from '@ui/grids/grid.component';
import ArticleCard from '@ui/cards/article-card.component';
import { type Article } from '@types';

export default function ArticleGrid(
  { articles }: { articles: Article[] }
) {
  return (
    <Grid>
      {articles?.map((article) => 
        <ArticleCard 
          key={article.url}
          article={article}
        />
      )}
    </Grid>
  );
}