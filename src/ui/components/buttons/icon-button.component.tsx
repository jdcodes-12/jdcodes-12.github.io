import React from 'react';
import { Button } from '@primitives/button';
import { SocialButtonInfo } from '@types';
import { cn } from '@utils';

interface IconButtonProps {
  styles?: string
  iconSize?: number
  buttonInfo: SocialButtonInfo
}

// TODO: Fix disabling the <a> tag
export default function SocialIconButton({ 
  buttonInfo, iconSize = 24, styles = '',
}: IconButtonProps) {
  
  const { isDisabled, href } = buttonInfo;

  if (buttonInfo.isDisabled) {
    document
      .getElementById(`${href}`)
      ?.addEventListener('click', 
        (event: MouseEvent) => event.preventDefault()
      );
  }

  return (
    <Button
      asChild
      size={'icon'}
      variant={'icon'}
      className={`${styles}`}
    >
      <a
        id={href}
        target='_blank' 
        href={isDisabled ? '' : href}
      >
        <buttonInfo.icon 
          size={iconSize}
          className={cn('', {
            '-gray-500': isDisabled
          })}
        />
      </a>
    </Button>
  );
}