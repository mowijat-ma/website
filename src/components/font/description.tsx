import { cn } from '@/lib/utils';
import React from 'react';

interface PostDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  value?: string;
  className?: string;
}

export default function PostDescription({className, ...props }: PostDescriptionProps) {
  return (
    <p 
      className={
        cn(`text-muted-foreground! text-base leading-normal line-clamp-2`, className)
      } 
      {...props}
    >
      {props.children}
    </p>
  );
}
export const Description = ({className, ...props}: {className?: string} & React.HTMLAttributes<HTMLParagraphElement>)=>{
  return (
    <p className={cn(
      className,
      "text-muted-foreground! text-base leading-normal",
    )} {...props}>
      {props.children}
    </p>
  )
}