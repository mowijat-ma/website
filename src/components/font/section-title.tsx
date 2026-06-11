import { cn } from '@/lib/utils';
import { FontComponentProps } from '@/types';
import React from 'react';

interface Font extends React.HTMLAttributes<HTMLParagraphElement> {
  value?: string;
  className?: string;
}

export default function SectionTitle({value, className, ...props }: FontComponentProps) {
  return (
    <h2
      className={
        cn(
             "lg:text-xl text-lg font-bold text-primary border-r-4 border-primary pr-3 mb-4",
            className)
      } 
      {...props}
    >
      {value || props.children}
    </h2>
  );
}