export function generateRandomColor(hex: boolean = false): string {
  const min = 0;
  const max = 255;
  const r = Math.floor(Math.random() * max);
  const g = Math.floor(Math.random() * max);
  const b = Math.floor(Math.random() * max);
  let hexCode = '#';

  if (hex) {
    const rHex = r.toString(16);
    const gHex = r.toString(16);
    const bHex = r.toString(16);
    hexCode = `${rHex}${gHex}${bHex}`.padStart(6, '0');
    hexCode = `#${hexCode}`.toUpperCase();
  }
  return hex ? hexCode : `rgb(${r},${g},${b})`;
}

export function generatePalette(size = 5): Array<string> {
  return new Array(size).fill(null).map(generateRandomColor);
}

export function parseRGB(color: string): Array<string> | null {
  const regex = /\((.*?)\)/g;
  const match: RegExpExecArray | null = regex.exec(color);
  if (!match) return null;
  return match[1].split(',');
}

export function getHexColor(rgbColor: string): string | null {
  const rgb = parseRGB(rgbColor);
  if (!rgb) return null;
  const rHex = parseInt(rgb[0]).toString(16);
  const gHex = parseInt(rgb[1]).toString(16);
  const bHex = parseInt(rgb[1]).toString(16);
  let hexCode = `${rHex}${gHex}${bHex}`;
  hexCode = hexCode.padStart(6, '0');
  hexCode = `#${hexCode}`.toUpperCase();
  return hexCode;
}
