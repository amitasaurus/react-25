import { useEffect, useState } from 'react';
import InstagramCard from '../components/instagramCard';
import getPosts from '../utils/infinite-scroll-helper';

type Props = {};

export default function InfiniteScroll({}: Props) {
  const limit = 10;
  const [cursor, setCursor] = useState(0);
  const [posts, setPosts] = useState<string[]>([]);
  const [shouldInfiniteScroll, setShouldInfiniteScroll] = useState(true);
  function fetchPosts(): void {
    const pageSize = cursor + limit;
    const nextPage = getPosts(cursor, pageSize);
    if (nextPage.length === 0) {
      setShouldInfiniteScroll(false);
      return;
    }
    setPosts([...posts, ...nextPage]);
    setCursor(pageSize + 1);
  }
  useEffect(fetchPosts, []);
  return (
    <div className="flex flex-col items-center w-full min-h-screen py-8 overflow-y-scroll bg-slate-100">
      {posts.map((e, i) => (
        <InstagramCard key={i} image={e} text={`Index of this post is ${i}`} />
      ))}
      {shouldInfiniteScroll && (
        <div className="flex justify-center my-4">
          <button
            type="button"
            className="px-4 py-1 border rounded border-slate-400"
            onClick={() => fetchPosts()}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
