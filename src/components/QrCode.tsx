export default function QrCode({ data = "Hello World" }: { data: string }) {
  return (
    <div className="flex h-[356px] w-full items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <img
        width={256}
        height={256}
        className="rounded-xl"
        src={`https://chart.googleapis.com/chart?cht=qr&chs=256x256&chl=${encodeURIComponent(data)}&choe=UTF-8`}
      />
    </div>
  );
}
