import { FEEDS } from '../lib/rss';
import Link from 'next/link';

function Rss() {
  return (
    <div className='px-6 py-12 max-w-x1 mx-auto'>
      <h1 className='font-bold text-5x1 mb-12'>Lunch Menu</h1>
      <div className='grid grid-cols-2 gap-4'>
        {FEEDS.map((feed) => (
          <Link key={feed.slug} href={`/feeds/${feed.slug}`}>
            <a className='p-4 border border-gray-200 hover:border-gray-500 rounded-lg'>
              {feed.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Rss;
