import type { MetadataRoute } from 'next';
import { siteUrl } from './metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: new Date() }];
}
