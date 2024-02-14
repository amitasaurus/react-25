import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

type Props = {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  expanded?: Boolean;
};

export default function Header({ children, onClick, expanded }: Props) {
  return (
    <div className="flex items-start justify-between pb-2 text-xl font-semibold text-slate-800">
      {children}
      <button type="button" className="icon-button" onClick={onClick}>
        {expanded ? <FiChevronUp /> : <FiChevronDown />}
      </button>
    </div>
  );
}
