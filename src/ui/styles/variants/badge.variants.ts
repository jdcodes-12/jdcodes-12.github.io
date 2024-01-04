import { VariantProps, cva } from 'class-variance-authority';

export const badgeVariants = cva(`
    inline-flex 
    items-center
    border 
    text-sm
    transition-colors 
    focus:outline-none 
    focus:ring-2 
    focus:ring-ring 
    focus:ring-offset-2
`, {
    variants: {
      variant: {
        default:`
          rounded-lg 
          border-transparent 
          bg-primary 
          text-primary-foreground
          px-3
          py-2
        `,
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg py-2',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
        tag: 'rounded-md text-xs px-3 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export type BadgeStyles = VariantProps<typeof badgeVariants>;