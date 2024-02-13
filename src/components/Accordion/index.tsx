import React from 'react';
import Header from './header';
import Panel from './panel';
import Content from './content';
import cn from '../../utils/cn';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Accordion({ children, className }: Props) {
  const [active, setActive] = React.useState(0);
  return (
    <div className={cn('w-full', className)}>
      {React.Children.map(children, (child, index) => (
        <Panel expanded={index === active}>
          <Header onClick={() => setActive(index)}>
            {(child as React.ReactElement)?.props.title}
          </Header>
          <Content>{child}</Content>
        </Panel>
      ))}
    </div>
  );
}
