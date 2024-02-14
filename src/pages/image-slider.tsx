import Slider from '../components/Slider';
import { imageData } from '../utils/data';

type Props = {};

export default function route({}: Props) {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-100">
      <Slider
        slides={imageData}
        containerClass="h-[512px] w-[720px] rounded-xl"
      />
    </div>
  );
}
