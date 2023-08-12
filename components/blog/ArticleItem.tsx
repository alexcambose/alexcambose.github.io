import dayjs from 'dayjs';
import { Badge } from '../baseComponents/badge/Badge';
import { BadgeList } from '../baseComponents/badge/BadgeList';
import { Article } from './types';
import Image from 'next/image';

export interface ArticleItemProps {
  article: Article;
}
export const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <div className="flex content-center gap-4 mt-6">
      <Image
        alt="Project mage"
        width={500}
        height={500}
        className="object-cover w-44 h-40"
        src={article.thumbnail}
      />
      <div className="">
        <h3 className="font-bold text-lg">{article.title}</h3>
        <p className="my-1">{article.description}</p>
        <span className="text-sm">
          Published on {dayjs(article.publishedDate).format('MMM DD')}
        </span>
        {' · '}
        <BadgeList className="mt-4">
          {article.categories.map((category) => (
            <Badge size="small" key={category}>
              {category}
            </Badge>
          ))}
        </BadgeList>
      </div>
    </div>
  );
};
