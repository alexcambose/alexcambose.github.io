import { Article } from '@/components/blog/types';
import { JSDOM } from 'jsdom';

function extractDescription(description: string): string {
  const dom = new JSDOM(description);
  const snippetElement = dom.window.document.querySelector('.medium-feed-snippet');
  return snippetElement ? snippetElement.textContent || '' : '';
}
export const getBlogArticles = async () => {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alexcambose`
  );
  const data = await res.json();
  return data.items.map((item: any) => ({
    title: item.title,
    description: extractDescription(item.description),
    categories: item.categories.map((e: string) => e.charAt(0).toUpperCase() + e.slice(1)),
    thumbnail: item.thumbnail,
    publishedDate: item.pubDate,
    linkUrl: item.link,
  })) as Article[];
};
