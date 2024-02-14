import { FaRegStar, FaStar } from 'react-icons/fa6';
import cn from '../utils/cn';
import { useState } from 'react';
import { generateKey } from '../utils';

type Props = {
  count?: number;
  onRating: (rating: number) => void;
};

export default function Star({ count = 5, onRating }: Props) {
  const [active, setActive] = useState(-1);
  function handleRating(index: number) {
    onRating(index + 1);
    setActive(index);
  }
  return (
    <div className="flex items-center justify-between">
      {[...new Array(count)].map((_, i) =>
        i <= active ? (
          <FaStar
            key={generateKey()}
            className={cn('cursor-pointer fill-amber-400')}
            size={24}
            onClick={() => handleRating(i)}
          />
        ) : (
          <FaRegStar
            key={generateKey()}
            className={cn('cursor-pointer fill-amber-400')}
            onClick={() => handleRating(i)}
            size={24}
          />
        )
      )}
    </div>
  );
}
