import React from 'react'
import { processDate } from '@utils';
import { type Article } from '@types';
import { Link } from 'gatsby';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@primitives/badge';
import { Button } from '@primitives/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@primitives/card';

export default function ArticleCard(
  { article }: { article: Article }
) {
  const { 
      description, 
      title, 
      uploadDate,
      modifyDate, 
      url, 
      tags
    } = article;

  return (
    <Card>
      <CardHeader 
        className='
          space-y-8
          tablet:h-48
          laptop:h-48
        '
      >
        <Badge
          variant={'secondary'}
          className='
            w-32 
            inline-flex 
            items-center 
            justify-center
          '
        >
          {processDate(uploadDate.toISOString())}
        </Badge>
        <CardTitle>{title}</CardTitle>         
      </CardHeader>
      <CardContent 
        className='
          text-sm
          text-muted-foreground
          font-light
          line-clamp-20
          leading-loose
          tablet:text-md
          tablet:leading-relaxed
          laptop:text-lg
          laptop:leading-relaxed
        '
      >
       {description}
      </CardContent>
      <CardFooter className='flex-col items-start space-y-4'>
        <span 
          className='
            flex-row
            py-4
            space-x-2
            space-y-2
            tablet:space-y-2
            laptop:space-y-0
          '
        >
          {tags?.map((tag) => 
            <Badge
              key={tag} 
              variant={'default'}
            >
              {tag}
            </Badge>
          )}
        </span>
        <Button
          variant={'secondary'} 
          asChild
          className='
            w-full 
            font-semibold
            text-md
          '
        >
          <span className='flex justify-between'>
            <Link to={`/${url}`}>View More</Link>
            <ExternalLink />
          </span>
        </Button>
        { modifyDate ?  
          <span 
            className='
              flex 
              justify-between 
              items-center 
              w-full
              font-thin
              text-md
            '
          >
              <small>Last Modified:</small>
              <small>{processDate(modifyDate.toString())}</small>
          </span> : null}
      </CardFooter>
    </Card>
  );
}