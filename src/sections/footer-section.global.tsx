import React from 'react';
import Copyright from '@ui/misc/copyright.component';
import { SOCIALS } from '@config/socials/socials-info.config';
import IconButton from '@ui/buttons/icon-button.component';

export default function Footer(
  { screenReaderText }: { screenReaderText?: string }
) {
  return (
    <footer 
      className='
        flex flex-col items-center justify-center
        space-y-4 py-8
      '
    >
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