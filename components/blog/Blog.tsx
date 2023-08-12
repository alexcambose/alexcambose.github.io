import { getBlogArticles } from '@/utils/data/getBlogArticles';
import { ArticleList } from './ArticleList';

export const Blog = async () => {
  const articles = await getBlogArticles();
  console.log(articles);
  return <ArticleList articles={articles} />;
};
