export const getUserData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api`);
  const data = await res.json();
  return {
    projects: data.viewer.itemShowcase.items.nodes as [
      {
        id: string;
        name: string;
        description: string;
        openGraphImageUrl: string;
        forkCount: number;
        createdAt: string;
      }
    ],
  };
};
