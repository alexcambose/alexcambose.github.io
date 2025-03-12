import { Link } from '@/components/baseComponents/link/Link';

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-screen-xl pb-14 pt-4 text-sm tracking-wide dark:text-slate-400 lg:pb-8">
      <p>
        Designed and coded by Alexandru Cambose. Built with{' '}
        <Link href="https://nextjs.org/" target="_blank">
          Next.js
        </Link>{' '}
        and{' '}
        <Link href="https://tailwindcss.com/" target="_blank">
          Tailwind CSS
        </Link>
        , deployed with{' '}
        <Link href="https://vercel.com/" target="_blank">
          Vercel
        </Link>
        . All text is set in the Inter typeface. See{' '}
        <Link href="https://github.com/alexcambose/alexcambose.github.io" target="_blank">
          Github repository
        </Link>
        .
      </p>
      <p className="mt-4">
        Download a PDF version of my resume{' '}
        <Link target="_blank" href="Alexandru_Cambose_Software_Engineer_Resume.pdf">
          here.
        </Link>
      </p>
    </footer>
  );
};
