const topics = [
  'nature',
  'architecture',
  'travel',
  'food & drink',
  'fashion',
  'health & wellness',
  'business & work',
  'arts & culture',
  'animals',
  'interiors',
  'people',
  'technology',
  'textures & patterns',
  'backgrounds',
  'landscapes',
  'music',
  'education',
  'sports & fitness',
  'vintage',
  'transportation',
];

const posts = new Array(25)
  .fill(null)
  .map(
    () =>
      `https://source.unsplash.com/random?${encodeURIComponent(
        topics[Math.floor(Math.random() * topics.length)]
      )}`
  );
export default function getPosts(start: number, end: number): Array<string> {
  return posts.slice(start, end);
}
