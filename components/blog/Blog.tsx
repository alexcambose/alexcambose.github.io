import { getBlogArticles } from '@/utils/data/getBlogArticles';
import { ArticleList } from './ArticleList';

export const Blog = async () => {
  const articles = await getBlogArticles();
  return <ArticleList articles={articles} />;
};
