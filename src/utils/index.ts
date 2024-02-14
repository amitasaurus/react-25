export function generateRandomColor() {
  const min = 0;
  const max = 255;
  const r = Math.floor(Math.random() * max);
  const g = Math.floor(Math.random() * max);
  const b = Math.floor(Math.random() * max);
  return `rgb(${r},${g},${b})`;
}

export function generatePalette(size = 5) {
  return new Array(size).fill(null).map(generateRandomColor);
}

export function getRGB(color: string) {
  const regex = /\((.*?)\)/g;
  const match: RegExpExecArray | null = regex.exec(color);
  return match ? match[1].split(',') : null;
}
