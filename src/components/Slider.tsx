import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import cn from '../utils/cn';

interface ISlide {
  ref: React.RefObject<HTMLImageElement>;
  slide: string;
}

type Props = {
  slides: Array<string>;
  containerClass: string;
};

export default function Slider({ slides, containerClass }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesInternal: Array<ISlide> = slides.map((e) => {
    return { slide: e, ref: useRef(null) };
  });
  function handleSlideTransition(transitionDirection: string) {
    let nextSlide =
      transitionDirection === 'right' ? currentSlide + 1 : currentSlide - 1;
    if (nextSlide > slides.length - 1) {
      nextSlide = 0;
    } else if (nextSlide < 0) {
      nextSlide = slides.length - 1;
    }
    setCurrentSlide(nextSlide);
    const nextSlideElement = slidesInternal[nextSlide].ref.current;
    if (nextSlideElement)
      nextSlideElement.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="relative">
      <div className={cn('flex overflow-y-scroll', containerClass)}>
        {slidesInternal.map((e, i) => (
          <img
            key={i}
            src={e.slide as string}
            ref={e.ref}
            className="object-cover w-full h-full"
          />
        ))}
        <button
          type="button"
          className="absolute z-10 p-3 -translate-y-1/2 bg-white rounded-full shadow-md left-8 top-1/2 text-slate-800"
          onClick={() => handleSlideTransition('left')}
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          className="absolute z-10 p-3 -translate-y-1/2 bg-white rounded-full shadow-md right-8 top-1/2 text-slate-800"
          onClick={() => handleSlideTransition('right')}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
