import React from 'react';

interface CopyrightProps {
  screenReaderText?: string,
}

export default function Copyright({
  screenReaderText = 'An Ambitious Web Developer'
}: CopyrightProps) {
  return (
    <>
      <h1 className='sr-only'>
        {`Johnny - ${screenReaderText}`}
      </h1>
      <small 
        className='
          flex 
          font-extralight 
          text-lg
        '
      >
        <span className='flex items-center justify-center'>
          Made with 💜 via&nbsp;<a href='https://www.gatsbyjs.com/'>Gatsby</a>.
        </span>
        <span>&nbsp;&copy; {new Date().getFullYear()}</span>
      </small>
    </>
  );
}