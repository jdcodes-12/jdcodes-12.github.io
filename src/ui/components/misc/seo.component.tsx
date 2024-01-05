import React, { type ReactNode } from 'react';
import { useSiteMetadata } from '@hooks/use-site-metadata.hook';

interface SEOProps {
  title?: string
  description?: string
  pathname?: string
  children?: ReactNode
}

export default function SEO({ 
  title, description, pathname, children 
}: SEOProps) {
  
  const { 
    title: defaultTitle, 
    description: defaultDescription, 
    siteUrl 
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <meta charSet='utf-8'/>
      <meta name='url' content={seo.url} />
      <meta name='title' content={seo.title} />
      <meta name='description' content={seo.description} />
      <link rel='icon' href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🦮</text></svg>" />
      {children}
      <title>{seo.title}</title>
    </>
  );
}