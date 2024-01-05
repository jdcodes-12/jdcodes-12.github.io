import React from 'react';
import { Link } from 'gatsby';
import { NavigationLink } from '@types';

export function NavLink(
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