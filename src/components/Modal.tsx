import React from 'react';
import cn from '../utils/cn';

type Props = {
  open?: boolean;
  close?: () => void;
  children?: React.ReactNode;
};

export default function Modal({ open = false, close, children }: Props) {
  const _children = React.Children.toArray(children);
  const headline = _children.filter((child) => {
    return React.isValidElement(child)
      ? child.props?.slot === 'headline'
      : null;
  });
  const content = _children.filter((child) => {
    return React.isValidElement(child) ? child.props?.slot === 'content' : null;
  });
  const actions = _children.filter((child) => {
    return React.isValidElement(child) ? child.props?.slot === 'actions' : null;
  });
  return (
    <div
      className={cn(
        'fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-slate-900 bg-opacity-50 z-[99]',
        {
          hidden: !open,
        }
      )}
      onClick={close}
    >
      <div
        className={cn(
          'w-1/2 rounded-lg shadow-lg min-h-80 p-8 bg-white z-[100] flex flex-col'
        )}
        onClick={(event) => event.stopPropagation()}
      >
        {headline && (
          <div className="text-2xl font-semibold text-slate-800">
            {headline}
          </div>
        )}
        {content && (
          <div className="my-4 text-base font-normal text-slate-600">
            {content}
          </div>
        )}
        {actions && <div className="flex justify-end mt-auto">{actions}</div>}
      </div>
    </div>
  );
}
