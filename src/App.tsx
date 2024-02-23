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
  function toggleTheme() {
    const darkMode = !enabled;
    setEnabled(darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-x-hidden overflow-y-scroll bg-white dark:bg-slate-800">
      <div className="fixed right-0 top-0 m-4 flex items-center">
        <div className="mr-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          Dark Mode {enabled ? "ON" : "OFF"}
        </div>
        <Switch
          checked={enabled}
          onChange={toggleTheme}
          className={`${
            enabled ? "bg-blue-600" : "bg-gray-200"
          } inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Toggle Theme</span>
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>
      <ol>
        {paths.map((e, i) => (
          <li key={i} className="mt-2 text-2xl font-semibold">
            <Link
              to={e.url}
              className="text-slate-800 hover:text-indigo-500 dark:text-white dark:hover:text-indigo-500"
            >
              <span className="text-xl">{i + 1}.</span> {e.displayName}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
