import cn from '../../utils/cn';
type Props = {
  children: React.ReactNode;
  expanded?: Boolean;
};

export default function Content({ children, expanded }: Props) {
  return (
    <div
      className={cn(
        'text-sm text-slate-700',
        !expanded && 'h-0 overflow-hidden'
      )}
    >
      {children}
    </div>
  );
}
