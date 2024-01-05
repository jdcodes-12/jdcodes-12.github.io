import React from 'react'

export default function Hero() {
  return (
    <>
      <p
        className='
          text-8xl flex flex-col space-y-2
          font-thin
          leading-snug
        '
      >
        <span 
          className='
            after:content-[","]
          '
        >
          Hey. I'm <strong className='font-bold underline'>Johnny</strong>
        </span>
        <span className='font-thin'>
          a&nbsp;
          <em 
            className='
              font-semibold not-italic
              
            '
          >Web Developer</em>
          &nbsp;building useful software.
        </span>
      </p>
      <p className='
          leading-loose text-3xl text-neutral-600 font-light
        '
        >
        This is my minimalistc portfolio, highlighting a spectrum of 
        projects I have either completed or am currently engaged in. 
        These projects range from production-level endeavors to demos&nbsp;
        <em>(with sharable soruce code, free to use and/or view)</em>
        &nbsp;for learning various technologies. Furthermore, you can find 
        articles that discuss my recent insights gained while navigating 
        the vast landscape of web development. As the saying goes, "the best way 
        to learn is to teach," and these articles reflect my journey of continuous 
        learning and exploration in the field.
      </p>
    </>
  );
}
