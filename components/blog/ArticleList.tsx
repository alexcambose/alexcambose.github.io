import { ArticleItem } from './ArticleItem';
import { Article } from './types';

export interface ArticleListProps {
  articles: Article[];
}
export const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <>
      {articles.map((e) => (
        <ArticleItem key={e.title} article={e} />
      ))}
    </>
  );
};
