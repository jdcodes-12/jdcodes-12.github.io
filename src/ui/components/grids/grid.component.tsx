import React, { type ReactNode } from 'react';

export default function Grid(
  { children }: { children: ReactNode }
) {
  return (
    <div
      className='
        grid
        grid-cols-1
        gap-y-8
        tablet:gap-y-8
        tablet:gap-x-4
        tablet:grid-cols-2
        laptop:grid-cols-3
        laptop:gap-y-8
        laptop:gap-x-4
        desk-lg:gap-y-12
        desk-lg:gap-x-8
      '
    >
     {children}
    </div>
  );
}
