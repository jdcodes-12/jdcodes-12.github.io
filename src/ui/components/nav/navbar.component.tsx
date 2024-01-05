import React from 'react'
import { cn } from '@utils';
import { NAV_LINKS } from '@config/navigation/navbar-links.config';
import { NavLink } from '@ui/nav/nav-link.component';
import DownloadButton from '@ui/buttons/download-button.component';

interface NavbarProps {
  isArticleLayout?: boolean
}

export default function Navbar({
  isArticleLayout = false
}: NavbarProps) {
  return (
    <div 
      className={cn(`
        flex 
        justify-between 
        items-center 
        container 
        py-8
        `, {
          'max-w-[60%] min-w-[60%]': isArticleLayout
        })}
      >
      <nav>
        <ul className='flex justify-between items-center space-x-8'>
          {NAV_LINKS.map((link) => 
            <NavLink
              key={link.label}
              link={link}
            />
          )}
        </ul>
      </nav>
      <DownloadButton />
    </div>
  );
}