import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineChatBubbleOutline } from 'react-icons/md';
import { MdSend } from 'react-icons/md';
import { FiBookmark } from 'react-icons/fi';

type Props = {
  image: string;
  text?: string;
};

export default function instagramCard({ image, text }: Props) {
  return (
    <div className="rounded-lg shadow-md w-[512px] bg-white overflow-hidden mb-8">
      <div className="flex items-center p-4">
        <div className="w-[32px] h-[32px] rounded-full bg-slate-100 mr-2"></div>
        <div className="w-[256px] h-[16px] rounded-xl bg-slate-100"></div>
      </div>
      <img src={image} height={512} className="object-cover w-full h-[512px]" />
      <div className="flex justify-between px-4 py-4">
        <div className="flex items-center">
          <FaRegHeart className="mr-6 fill-slate-600" size={24} />
          <MdOutlineChatBubbleOutline
            className="mr-6 fill-slate-600"
            size={24}
          />
          <MdSend size={24} className="fill-slate-600" />
        </div>
        <FiBookmark size={24} className="stroke-slate-600" />
      </div>
      <div className="p-4 pt-0 text-sm font-medium text-slate-700">{text}</div>
    </div>
  );
}
