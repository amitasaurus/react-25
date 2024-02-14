import { getRGB } from '../../utils';
type Props = {
  color: string;
};

export default function Card({ color }: Props) {
  const rgb = getRGB(color);
  if (!rgb) return null;
  const rHex = parseInt(rgb[0]).toString(16);
  const gHex = parseInt(rgb[1]).toString(16);
  const bHex = parseInt(rgb[1]).toString(16);

  let hexCode = `${rHex}${gHex}${bHex}`;
  hexCode = hexCode.padStart(6, '0');
  hexCode = `#${hexCode}`.toUpperCase();
  return (
    <div
      className="flex flex-col items-center justify-end"
      style={{
        backgroundColor: hexCode,
      }}
    >
      <div className="mb-16 text-3xl font-bold text-white varela-round-regular">
        {hexCode}
      </div>
    </div>
  );
}
