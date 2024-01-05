import React, { ReactNode } from 'react';
import { Link } from 'gatsby';
import { ArrowUp } from 'lucide-react';
import { Button } from '@primitives/button';
import { smoothScrollToTop } from '@utils';
import Navbar from '@ui/nav/navbar.component';
import Footer from '@sections/footer-section.global'

interface RootLayoutProps {
  children: ReactNode,
  showNavbar?: boolean
  hasAnimatedNavbar?: boolean 
  copyrightScreenReaderText?: string
}

export default function ArticleLayout({ 
  children,
  copyrightScreenReaderText = ''
}: RootLayoutProps) {
  return (
    <>
      <Navbar isArticleLayout />
        {children}
      <Footer />
      <Button
        variant={'rounded'}
        asChild
        onClick={smoothScrollToTop}
        className='
          fixed bottom-5 left-5
        '  
      >
        <Link to='#'>
          <ArrowUp />
        </Link>
      </Button>
    </>
  );
}


