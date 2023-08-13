import dayjs from 'dayjs';
import Image from 'next/image';
import { Article } from './types';

export interface ArticleItemProps {
  article: Article;
}

export const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <li>
      <a className="flex items-center gap-4 mt-10" href={article.linkUrl} target="_blank">
        <Image
          alt="Project mage"
          width={500}
          height={500}
          className="object-cover w-32 h-28"
          src={article.thumbnail}
        />
        <div>
          <h3 className="font-bold text-lg">{article.title}</h3>
          <small className="text-xsm opacity-90">
            Published on {dayjs(article.publishedDate).format('MMM DD YYYY')}
          </small>
          <p className="mt-2">{article.description}</p>
          <div className="mt-2">
            {article.categories.map((category, i) => (
              <small className="text-xsm opacity-90" key={category}>
                {category} {i < article.categories.length - 1 && '· '}
              </small>
            ))}
          </div>
        </div>
      </a>
    </li>
  );
};
