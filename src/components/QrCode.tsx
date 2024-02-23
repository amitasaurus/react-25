type props = {
  url: string;
};
export default function QrCode({ url }: props) {
  console.log(url);
  return <div>QR Code Generator</div>;
}
