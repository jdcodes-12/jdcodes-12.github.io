import React from "react"
import { type PageProps, graphql, Link } from "gatsby"
import { processDate } from "@utils";

// {
//   "node": {
//     "frontmatter": {
//       "date": "2024-01-03T20:39:47-0600",
//       "series": "Grokking Web: Networking",
//       "slug": "/intro-to-networking/how-computers-communicate",
//       "tags": [
//         "web",
//         "networking"
//       ],
//       "title": "Networking: How Computers Communicate"
//     }
//   }
// },

// type DataProps = {
//   blog: {
//     content: string
//     meta: {
//       series?: string
//       date: string
//       title: string
//       tags?: string[]
//       slug: string
//     }
//   }
// }

export default function BlogPostTemplate({ data }: any) {
  const { content, meta } = data.blog;
  const { series, date, title, tags, nextUrl, prevUrl } = meta;

  return (
    <article>
      <span className="text-2xl">{processDate(date)}</span>
      <span>{series}</span>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <ul className="space-y-4">
        {tags.map((tag: string) => <li>tag</li>)}
      </ul>
      {/* {lastModified && <span>{lastModified}</span>} */}
      <Link to={prevUrl}>PREVIOUS BLOG</Link>
      <Link to={nextUrl}>NEXT BLOG</Link>
    </article>
  );
}

// Query for page - $slug comes from createPage in gatsby-node.ts
export const query = graphql`
  query GetBlogBySlug($slug: String!) {
    blog: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      content: html
      meta: frontmatter {
        series
        date
        title
        tags
        nextUrl
        prevUrl
      }
    }
  }
`