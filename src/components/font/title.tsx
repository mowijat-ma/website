import { cn } from '@/lib/utils';
import React from 'react';

interface PostTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  value?: string;
  className?: string;
}

export default function PostTitle({className, ...props }: PostTitleProps) {
  return (
    <p 
      className={
        cn("text-lg leading-normal font-semibold group-hover:underline group-hover:text-primary- transition-colors line-clamp-1", className)
      } 
      {...props}
    >
      {props.children}
    </p>
  );
}