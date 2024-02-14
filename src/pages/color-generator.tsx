import { useEffect, useState } from 'react';
import { generatePalette } from '../utils';
import Card from '../components/ColorCard';

function route() {
  const [palette, setPalette] = useState(generatePalette());
  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === ' ') setPalette(generatePalette());
  }
  useEffect(() => {
    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div className="absolute p-2 text-white -translate-x-1/2 bg-opacity-50 rounded bg-slate-800 left-1/2 varela-round-regular top-6">
        Press the spacebar to generate color palettes!
      </div>
      <div className="grid h-screen grid-cols-5">
        {palette.map((e, i) => (
          <Card key={i} color={e} />
        ))}
      </div>
    </div>
  );
}

export default route;
