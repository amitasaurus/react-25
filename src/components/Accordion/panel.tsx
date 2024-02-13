import React from 'react';

type Props = {
  children: React.ReactNode;
  expanded?: Boolean;
};

export default function Panel({ children, expanded }: Props) {
  return (
    <div className="p-4">
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, { expanded })
      )}
    </div>
  );
}
