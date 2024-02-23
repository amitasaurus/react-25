import TreeView from "../components/TreeView";
import { treeData } from "../utils/data";
export default function Page() {
  return (
    <div className="grid h-screen w-full grid-cols-12">
      <div className="col-span-3 bg-slate-100 p-2">
        <TreeView data={treeData} />
      </div>
      <div className="col-span-9 flex flex-col items-center justify-center">
        <div className="mb-4 font-semibold text-slate-700">
          JSON driven dense tree structure rendered for navigation
        </div>
        <pre>{JSON.stringify(treeData[2], null, 2)}</pre>
      </div>
    </div>
  );
}
