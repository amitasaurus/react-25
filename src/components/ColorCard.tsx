import { getHexColor } from '../utils';
type Props = {
  color: string;
};

export default function Card({ color }: Props) {
  let hexCode = getHexColor(color) ?? '#000';
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
