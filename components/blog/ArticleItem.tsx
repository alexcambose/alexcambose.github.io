import dayjs from 'dayjs';
import Image from 'next/image';
import { Article } from './types';

export interface ArticleItemProps {
  article: Article;
}

export const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <li className="group/item">
      <a
        className="flex items-center gap-4 mt-2 rounded-md group-hover:opacity-50 hover:!bg-slate-800/50 hover:!opacity-100 p-3 transition"
        href={article.linkUrl}
        target="_blank"
      >
        <Image
          alt="Project mage"
          width={500}
          height={500}
          className="object-cover w-[14vw] h-[10vw] lg:w-32 lg:h-28 self-start lg:self-center"
          src={article.thumbnail}
        />
        <div>
          <h3 className="font-bold text-lg">{article.title}</h3>
          <small className="text-xsm opacity-90">
            Published on {dayjs(article.publishedDate).format('MMM DD YYYY')}
          </small>
          <p className="mt-1">{article.description}</p>
          <div className="mt-1">
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
