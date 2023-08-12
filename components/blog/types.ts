export interface Article {
  title: string;
  description: string;
  thumbnail: string;
  readTimeEstimateMinutes: number;
  publishedDate: Date;
  linkUrl: string;
  categories: string[];
}
