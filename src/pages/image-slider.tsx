import Slider from '../components/Slider';
import { imageData } from '../utils/data';

export default function route() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-slate-100">
      <Slider
        slides={imageData}
        containerClass="h-[512px] w-[720px] rounded-xl"
      />
    </div>
  );
}
