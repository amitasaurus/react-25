import React from "react";
import { IconType } from "react-icons";
import type { navigation } from "../utils/data";

function Link({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex cursor-pointer items-center rounded-md px-8 py-2 text-base font-normal text-slate-700 hover:bg-slate-200">
      {children}
    </div>
  );
}
function getIcon(Icon: IconType) {
  return <Icon />;
}
function renderList(list: Array<navigation>): React.ReactNode {
  return (
    <ul>
      {list.map((e: navigation) => (
        <li key={e.label}>
          <Link>
            <div className="mr-4">{e.icon && getIcon(e.icon)}</div>
            <div>{e.label}</div>
          </Link>
          {e.submenu && (
            <li
              key={e.url}
              className="border border-dashed border-slate-300 pl-4"
            >
              {renderList(e.submenu)}
            </li>
          )}
        </li>
      ))}
    </ul>
  );
}
export default function TreeView({ data }: { data: Array<navigation> }) {
  return <div>{renderList(data)}</div>;
}
