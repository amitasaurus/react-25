import Star from '../components/Star';
import rating1 from '../assets/rating-0.png';
import rating2 from '../assets/rating-1.png';
import rating3 from '../assets/rating-2.png';
import rating4 from '../assets/rating-3.png';
import rating5 from '../assets/rating-4.png';
import { useState } from 'react';

type Props = {};

const imgRatingMap: Record<string, string> = {
  'rating-1': rating1,
  'rating-2': rating2,
  'rating-3': rating3,
  'rating-4': rating4,
  'rating-5': rating5,
};

export default function route({}: Props) {
  const [rating, setRating] = useState(4);
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-1">
      <div className="px-6 py-4 bg-white rounded-lg shadow-md min-w-[300px]">
        <img
          src={rating ? imgRatingMap[`rating-${rating}`] : rating5}
          width={48}
          className="m-auto"
        />
        <div className="mt-1 mb-3 text-center text-md varela-round-regular text-slate-700">
          How was your experience ?
        </div>
        <Star count={5} onRating={setRating} />
      </div>
    </div>
  );
}
