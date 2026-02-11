import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'stone' | 'sage' | 'mineral';
}

export const Section = ({
  children,
  className,
  id,
  background = 'white',
  ...props
}: SectionProps) => {
  const bgColors = {
    white: 'bg-stone-50',
    stone: 'bg-stone-100',
    sage: 'bg-sage-50',
    mineral: 'bg-mineral-light/20',
  };

  return (
    <section
      id={id}
      className={cn(
        'py-20 md:py-32 w-full overflow-hidden relative',
        bgColors[background],
        className
      )}
      {...props}
    >
      <div className="container-wide relative z-10">
        {children}
      </div>
    </section>
  );
};
