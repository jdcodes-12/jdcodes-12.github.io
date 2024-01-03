import React from 'react';
import { Button } from '@primitives/button';

export default function Homepage() {
  return (
    <main>
      <Button className='font-bold text-md bg-indigo-300 rounded-lg p-1.5'>
        Hello World
      </Button>
    </main>
  );
}

export function Head() {
  return <title>Johnny, an Ambitious Web Developer.</title>;
}
