import Link from 'next/link';
import React from 'react';

export const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Link href="/" className={`font-serif text-2xl tracking-wide font-medium ${className}`}>
      Samsara Wellness
    </Link>
  );
};
