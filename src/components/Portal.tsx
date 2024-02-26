import React from 'react';
import cn from '../utils/cn';

export default function Portal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-center w-screen h-screen bg-slate-100',
        className
      )}
    >
      {children}
    </div>
  );
}
