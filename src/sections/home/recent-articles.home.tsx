import React from 'react'
import ArticleGrid from '@ui/grids/article-grid.component';
import { useStaticQuery, graphql } from 'gatsby';

export default function RecentArticles() {

  const data = useStaticQuery(graphql`
      query GetNineMostRecentArticles {
        files: allMarkdownRemark(
          filter: {}
          limit: 9
          sort: {frontmatter: {date: DESC}}
        ) {
          articles: edges {
            info: node {
              meta: frontmatter {
                slug
                date
                series
                title
                description
                tags
              }
            }
          }
        }
      }
  `);


  
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
        <ArticleGrid 
          articles={data ? data!.files.articles : []} 
        />
    </section>
  );
}

