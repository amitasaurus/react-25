import { useState } from "react";
import QrCode from "../components/QrCode";
export default function Page() {
  const [data, setData] = useState("");
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-50">
      <div className="flex w-[350px] flex-col items-center overflow-hidden rounded-lg bg-white shadow-lg">
        <QrCode data={data} />
        <input
          id="data"
          name="data"
          type="text"
          required
          onChange={(e) => setData(e.target.value)}
          placeholder="enter text/url to generate QRCode"
          className="my-4 block w-[95%] rounded-md border border-slate-300 px-2 py-1.5 text-gray-900 shadow-sm outline-none focus-visible:border-blue-500 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
