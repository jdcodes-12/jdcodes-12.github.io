import React from 'react';
import RootLayout from '@layouts/root-layout.component';
import RecentArticles from '@sections/home/recent-articles.home';
import FeaturedProjects from '@sections/home/featured-projects.home';
import Hero from '@sections/home/hero.home';

export default function Homepage() {
  return (
    <RootLayout>
      <main className='container space-y-32'>
        <Hero />
        <FeaturedProjects />
        <RecentArticles />
      </main>
    </RootLayout>
  );
}

export function Head() {
  return <title>Johnny, an Ambitious Web Developer.</title>;
}
