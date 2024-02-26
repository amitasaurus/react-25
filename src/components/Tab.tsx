import React, { useState } from 'react';
import cn from '../utils/cn';

type TabProps = {
  children: React.ReactNode;
  className?: string;
};

type TablistProps = {
  text: string;
  active?: boolean;
  onClick?: () => void;
};

function TabList({ text, active, onClick }: TablistProps) {
  return (
    <li
      onClick={onClick}
      className={cn(
        'flex-1 px-2 py-2 text-base font-semibold text-center text-slate-800 cursor-pointer hover:bg-slate-50',
        {
          'bg-slate-50 border-b-2 border-indigo-500': active,
        }
      )}
    >
      {text}
    </li>
  );
}

function TabContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 text-base font-normal text-slate-500">{children}</div>
  );
}

export default function Tab({ children, className }: TabProps) {
  const [active, setActive] = useState(0);
  const _children = React.Children.toArray(children);
  const tablist: string[] = [];
  const tabcontent: string[] = [];
  _children.forEach((child) => {
    if (React.isValidElement(child)) {
      tablist.push(child?.props?.title);
      tabcontent.push(child?.props?.children);
    }
  });
  console.log(tablist);
  function handleTabChange(index: number) {
    setActive(index);
  }
  return (
    <div className={cn('bg-white overflow-x-scroll', className)}>
      <ul className="flex">
        {tablist.map((tab, i) => (
          <TabList
            text={tab}
            active={active === i}
            onClick={() => handleTabChange(i)}
            key={i}
          />
        ))}
      </ul>
      {tabcontent.map((content, i) => (
        <React.Fragment key={i}>
          {active === i && <TabContent>{content}</TabContent>}
        </React.Fragment>
      ))}
    </div>
  );
}
