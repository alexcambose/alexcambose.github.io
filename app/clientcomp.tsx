'use client';

export const ClientComp = () => {
  return <div>CLIENT {JSON.stringify(Object.keys(localStorage))}</div>;
};
