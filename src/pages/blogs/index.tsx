import React from 'react'
import { graphql, type PageProps, Link } from 'gatsby'
import Footer from '@sections/footer-section.global'
import RootLayout from '@layouts/root-layout.component'

interface DataProps {
  files: {
    blogs: {
      info: {
        meta: {
          slug: string
          title: string
        }
      }
    }[]
  }
}

// Blog Grid goes here
export default function BlogListingPage({ data }: PageProps<DataProps>) {
  return (
   <RootLayout>
      <div className='flex flex-col'>
        {
          data.files.blogs.map((blog: any) => {
            const blogUrl = blog.info.meta.slug;
            return <Link to={blogUrl}>{blog.info.meta.title}</Link>
          
          })}
      </div>
    </RootLayout>
  );
}

export const query = graphql`
  query GetAllBlogs {
    files: allMarkdownRemark {
      blogs: edges {
        info: node {
          meta: frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`