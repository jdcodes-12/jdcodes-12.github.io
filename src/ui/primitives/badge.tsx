import * as React from 'react';
import { cn } from '@utils';
import {
  badgeVariants,
  type BadgeStyles 
} from '@variants/badge.variants';

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  BadgeStyles {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div 
      className={cn(badgeVariants({ variant }), className)} 
      {...props} 
    />
  );
}

