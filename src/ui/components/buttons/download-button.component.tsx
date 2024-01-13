import React from 'react'
import { Button } from '@primitives/button'
import { useStaticQuery, graphql } from 'gatsby';

export default function DownloadButton() {
  const { resume } = useStaticQuery(graphql`
    query GetResumeFilePath {
      resume: file(
        id: {eq: "e8b15cf6-dd9d-57c6-b749-85421bacbf2f"}
      ) {
        name
        publicURL
      }
    }
  `);


  return (
    <Button
      variant={'default'}
      asChild
      className='
        py-6
        shadow-lg
      '
    >
      <a
        href={resume.publicURL}
        download={'johnathan-dickson-developer-resume.pdf'}
      >
        Download My Resume
      </a>
    </Button>
  );
}