import React from 'react'
import { NAV_LINKS } from '@config/navigation/navbar-links.config';
import DownloadButton from '@ui/buttons/download-button.component';
import { Link } from 'gatsby';
import { NavigationLink } from '@types';

export default function Navbar() {
  return (
    <div className='flex justify-between items-center container py-8'>
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

function NavLink(
  { link }: { link: NavigationLink }
) {
  const { href, label } = link;

  return (
    <Link 
      to={href}
      className='
        font-medium
        text-2xl
        underline
      '
    >
      {label}
    </Link>
  );
}