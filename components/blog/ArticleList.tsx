'use client';
import React, { useState } from 'react';
import { ArticleItem } from './ArticleItem';
import { Article } from './types';

export interface ArticleListProps {
  articles: Article[];
}

export const ArticleList = ({ articles }: ArticleListProps) => {
  const INITIAL_COUNT = 5;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const handleViewMore = () => {
    // Increase visibleCount by 5 (or any other desired number) each time
    setVisibleCount((prevCount) => prevCount + 5);
  };
  const handleViewLess = () => {
    // Increase visibleCount by 5 (or any other desired number) each time
    setVisibleCount((prevCount) => prevCount - 5);
  };

  return (
    <div>
      <ul className="group" role="article list-none">
        {articles.slice(0, visibleCount).map((e) => (
          <ArticleItem key={e.title} article={e} />
        ))}
      </ul>

      {visibleCount < articles.length && (
        <span
          onClick={handleViewMore}
          className="pt-4 block text-sm font-light text-center select-none italic cursor-pointer align-middle hover:underline"
        >
          View More
        </span>
      )}
      {visibleCount >= articles.length && (
        <span
          onClick={handleViewLess}
          className="pt-4 block text-sm font-light text-center select-none italic cursor-pointer align-middle hover:underline"
        >
          View Less
        </span>
      )}
    </div>
  );
};
