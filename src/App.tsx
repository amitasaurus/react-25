import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";

const paths = [
  { url: "/accordion", displayName: "Accordion" },
  { url: "/color-generator", displayName: "Color Generator" },
  { url: "/star-rating", displayName: "Star Rating" },
  { url: "/image-slider", displayName: "Image Slider" },
  { url: "/infinite-scroll", displayName: "Infinite Scroll" },
  { url: "/tree-view", displayName: "Tree View" },
  { url: "/qr-code", displayName: "QR Code Generator" },
  { url: "/scroll-indicator", displayName: "Scroll Indicator" },
];

function App() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-x-hidden overflow-y-scroll">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-blue-600" : "bg-gray-200"
        } fixed right-0 top-0 m-4 inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Toggle Theme</span>
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <ol>
        {paths.map((e, i) => (
          <li key={i} className="mt-2 text-2xl font-semibold">
            <Link to={e.url} className=" text-slate-800">
              <span className="text-xl">{i + 1}.</span> {e.displayName}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
