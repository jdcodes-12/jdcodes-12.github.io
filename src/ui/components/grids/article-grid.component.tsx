import React from 'react'
import Grid from '@ui/grids/grid.component';
import ArticleCard from '@ui/cards/article-card.component';
// import { type Article } from '@types';

interface ArticleGridProps {
  articles?: any[]
  twoColumnOnLaptop?: boolean
}
export default function ArticleGrid({ 
  articles, 
  twoColumnOnLaptop = false
}: ArticleGridProps) {
  return (
    <Grid twoColumnOnLaptop={twoColumnOnLaptop}>
      {articles?.map((article: any) => 
        <ArticleCard
          key={article?.info.meta.title}
          article={article.info.meta}
        />
      )}
    </Grid>
  );
}