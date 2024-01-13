import React from 'react'
import { graphql, type PageProps, Link } from 'gatsby'
import RootLayout from '@layouts/root-layout.component'
import ArticleGrid from '@ui/grids/article-grid.component'

interface DataProps {
  files: {
    articles: {
      info: {
        meta: {
          slug: string
          title: string
        }
      }
    }[]
  }
}

export default function ArticlesListingPage({ data }: PageProps<DataProps>) {
  return (
   <RootLayout>
      <ArticleGrid 
        articles={data.files.articles}
        twoColumnOnLaptop
      />
    </RootLayout>
  );
}

export const query = graphql`
  query GetAllBlogs {
    files: allMarkdownRemark {
      articles: edges {
        info: node {
          meta: frontmatter {
            slug,
            date,
            series,
            title, 
            description,
            tags
          }
        }
      }
    }
  }
`