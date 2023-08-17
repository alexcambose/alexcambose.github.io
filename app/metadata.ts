import type { Metadata } from 'next';

const description =
  'Alexandru Cambose is a talented software engineer with expertise in full stack software development and web3. Discover his diverse range of projects, programming skills, and career achievements. With a passion for coding and a commitment to delivering high-quality solutions, Alexandru Cambose is dedicated to pushing the boundaries of software engineering. Visit now to witness the innovation and expertise firsthand.';

export const metadata: Metadata = {
  title: {
    template: '%s - Alexandru Cambose',
    default: 'Alexandru Cambose',
  },
  description,
  openGraph: {
    type: 'website',
    url: 'https://alexcambose.com',
    title: 'Alexandru Cambose - Portfolio',
    description,
    siteName: 'Alexandru Cambose - Portfolio',
    locale: 'en_US',
    images: ['/og.png'],
  },
  keywords: [
    'Alexandru Cambose',
    'Software engineer',
    'Portfolio',
    'Projects',
    'Resume',
    'Coding',
    'Programming',
    'Skills',
    'Experience',
    'GitHub',
    'Programming languages',
    'Software development',
    'Technology stack',
    'Career achievements',
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [
    {
      name: 'Alexandru Cambose',
      url: 'https://alexcambose.com',
    },
  ],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fff' },
    { media: '(prefers-color-scheme: dark)', color: '#000' },
  ],
  colorScheme: 'light',
  twitter: {
    card: 'summary_large_image',
    title: 'Alexandru Cambose',
    description,
    siteId: '1467726470533754880',
    creator: '@alexcambose',
    creatorId: '1467726470533754880',
    images: ['/og.png'],
  },
  archives: ['https://alexcambose.com'],
  category: 'technology',
  publisher: 'Vercel',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Alexandru Cambose - Portfolio',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/icons/browserconfig.xml',
    'msapplication-TileColor': '#2B5797',
    'msapplication-tap-highlight': 'no',
  },
};
