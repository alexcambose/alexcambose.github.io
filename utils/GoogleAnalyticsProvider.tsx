'use client';
import { GoogleAnalytics as NextGoogleAnalytics } from 'nextjs-google-analytics';

export const GoogleAnalytics = () => {
  return <NextGoogleAnalytics trackPageViews />;
};
