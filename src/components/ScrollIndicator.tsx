import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollCalculator);
    }
    return () => {
      window.removeEventListener("scroll", scrollCalculator);
    };
  }, []);
  function scrollCalculator() {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setWidth(scrollPercent);
  }
  return (
    <div>
      <div
        className="h-2 bg-indigo-500 transition-all duration-75 ease-in"
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
}
