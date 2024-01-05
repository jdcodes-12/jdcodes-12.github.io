import React from "react"
import { type PageProps, graphql, Link } from "gatsby"
import { processDate } from "@utils";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { cn } from '@utils';
import { Badge } from "@primitives/badge";
import ArticleLayout from "@layouts/article-layout.component";

type DataProps = {
  blog: {
    content: string
    meta: {
      series?: string
      date: string
      title: string
      tags?: string[]
      prevUrl?: string
      nextUrl?: string
    }
  }
}

// TODO: Add image plugin for pictures?
// TODO: Add prism plugin for code styling?
export default function BlogPostTemplate({ data }: PageProps<DataProps>) {
  const { content, meta } = data.blog;
  const { series, date, title, tags, nextUrl, prevUrl } = meta;

  return (
    <ArticleLayout>
      <article className="container prose space-y-16 text-2xl">
        <header className="flex flex-col space-y-8">
          <span className="sr-only">{`${series}: ${title}`}</span>
          <div className="flex justify-between items-start">
            <small className="text-2xl font-normal">{processDate(date)}</small>
            <small className="text-md font-extralight italic">Updated: {processDate(date)}</small>
          </div>
          <span className="flex space-x-4">
            {tags?.map((tag: string) => <Badge variant={'default'}>{tag}</Badge>)}
          </span>
        </header>
        <main dangerouslySetInnerHTML={{ __html: content }} />
        <div 
          className={cn(`
              w-full flex justify-between items-center pt-16
            `, {
              'justify-end': !prevUrl
            }
          )}
        >
          { prevUrl ?  
            <Link to={prevUrl} className="inline-flex items-center space-x-4 not-prose">
              <ArrowLeft />
              <span className="font-light text-lg">Previous Article</span>
            </Link> : null
          }
          { nextUrl ? 
          <Link to={nextUrl} className="inline-flex items-center space-x-4 not-prose">
            <span className="font-light text-lg">Next Article</span>
            <ArrowRight />
          </Link> : null  
          } 
        </div>
      </article>
    </ArticleLayout>
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
        prevUrl
        nextUrl
      }
    }
  }
`