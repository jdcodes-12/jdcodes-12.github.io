import React from 'react';
import { Link } from 'gatsby';

export default function NotFound404Page() {
  return (
    <main>
      <h1>Page not found</h1>
      <Link to='/'>Go home</Link>.
    </main>
  );
}

export function Head() {
  return <title>Oopsies.. 404 Not Found.</title>;
}
