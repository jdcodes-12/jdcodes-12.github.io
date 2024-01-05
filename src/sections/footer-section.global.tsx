import React from 'react';
import Copyright from '@ui/misc/copyright.component';
import { SOCIALS } from '@config/socials/socials-info.config';
import IconButton from '@ui/buttons/icon-button.component';
import { Link } from 'gatsby';

export default function Footer(
  { screenReaderText }: { screenReaderText?: string }
) {
  return (
    <footer 
      className='
        container
        flex flex-col items-center justify-center
        space-y-8 pt-16
      '
    >
      <span 
        className='
          flex 
          justify-center
          center 
          items-center 
          space-x-16
          w-full
        '
      >
        <Link 
          to='/blogs' 
          className='
            text-md font-light
            underline
          '
        >
          Blogs
        </Link>
        <Link 
          to='/' 
          className='
            text-md font-light
            underline
          '
        >
          Home
        </Link>
        <Link 
          to='/projects' 
          className='
            text-md font-light
            underline
          '
        >
          Projects
        </Link>
      </span>
      <span className='space-x-4'>
        {SOCIALS.map((social) => 
          <IconButton 
            key={social.href}
            buttonInfo={social}
          />
        )}
      </span>
      <Copyright screenReaderText={screenReaderText} />
    </footer>
  );
}