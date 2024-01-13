import React, { type ReactNode } from 'react';
import { cn } from '@utils';

interface GridProps {
  children: ReactNode
  twoColumnOnLaptop?: boolean
}
export default function Grid({ 
  children,
  twoColumnOnLaptop = false
}: GridProps) {
  return (
    <div
      className={cn(`
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
      `,{
        'laptop:grid-cols-2': twoColumnOnLaptop
      })}
    >
     {children}
    </div>
  );
}
