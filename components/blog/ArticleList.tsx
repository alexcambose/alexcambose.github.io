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
      <ul className="group list-none">
        {articles.slice(0, visibleCount).map((e) => (
          <ArticleItem key={e.title} article={e} />
        ))}
      </ul>

      {visibleCount < articles.length && (
        <button
          type="button"
          onClick={handleViewMore}
          className="block w-full cursor-pointer select-none pt-4 text-center align-middle text-sm font-light italic hover:underline"
        >
          View More
        </button>
      )}
      {visibleCount >= articles.length && (
        <button
          type="button"
          onClick={handleViewLess}
          className="block w-full cursor-pointer select-none pt-4 text-center align-middle text-sm font-light italic hover:underline"
        >
          View Less
        </button>
      )}
    </div>
  );
};
