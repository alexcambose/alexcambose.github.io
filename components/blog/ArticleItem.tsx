import Image from 'next/image';
import { Article } from './types';

export interface ArticleItemProps {
  article: Article;
}

export const ArticleItem = ({ article }: ArticleItemProps) => {
  return (
    <li className="group/item">
      <a
        className="mt-2 flex items-center gap-4 rounded-md p-3 transition hover:!bg-slate-800/50 hover:!opacity-100 group-hover:opacity-50"
        href={article.linkUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          alt={article.title}
          width={500}
          height={500}
          className="h-[10vw] w-[14vw] self-start object-cover lg:h-28 lg:w-32 lg:self-center"
          src={article.thumbnail}
        />
        <div>
          <h3 className="text-lg font-bold">{article.title}</h3>
          <small className="text-xsm opacity-90">Published on {article.publishedDateLabel}</small>
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
