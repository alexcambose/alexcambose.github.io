import { ReactNode } from 'react'
import Link from 'next/link'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen mx-auto">
      <nav className="border-b border-gray-200 py-5 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]">
        <div className="flex items-center mx-auto lg:px-6 max-w-7xl px-14">
          <div className="flex flex-row items-center">
            <Link
              className="text-link hover:text-link-light transition-colors no-underline [&_code]:text-link [&_code]:hover:text-link-light [&_code]:transition-colors"
              href="/"
            >
              <span>
                <svg height={26} viewBox="0 0 75 65" fill="#000">
                  <title>Vercel Logo</title>
                  <path d="M37.59.25l36.95 64H.64l36.95-64z" />
                </svg>
              </span>
            </Link>
            <ul className="flex items-center content-center">
              <li className="ml-2 text-gray-200">
                <svg
                  viewBox="0 0 24 24"
                  width={32}
                  height={32}
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M16.88 3.549L7.12 20.451" />
                </svg>
              </li>
              <li className="font-medium" style={{ letterSpacing: '.01px' }}>
                <a
                  className="text-link hover:text-link-light transition-colors no-underline [&_code]:text-link [&_code]:hover:text-link-light [&_code]:transition-colors text-accents-6 duration-200 hover:text-accents-8 cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/chhpt/nextjs-starter"
                >
                  Next.js Starter
                </a>
              </li>
            </ul>
          </div>
          <div className="justify-end flex-1 hidden md:flex">
            <nav className="inline-flex flex-row items-center">
              <span className="flex items-center h-full ml-2 cursor-not-allowed text-accents-5">
                <a
                  data-variant="ghost"
                  className="relative inline-flex items-center justify-center cursor pointer no-underline px-3.5 rounded-md font-medium outline-0 select-none align-middle whitespace-nowrap transition-colors ease-in duration-200 text-success hover:bg-[rgba(0,68,255,0.06)] h-10 leading-10 text-[15px]"
                  href="https://github.com/vercel/examples/tree/main"
                  target="_blank"
                  rel="noreferrer"
                >
                  More Examples →
                </a>
              </span>
              <span className="flex items-center h-full ml-2 cursor-not-allowed text-accents-5">
                <a
                  data-variant="primary"
                  className="relative inline-flex items-center justify-center cursor pointer no-underline px-3.5 rounded-md font-medium outline-0 select-none align-middle whitespace-nowrap transition-colors ease-in duration-200 border border-solid text-background bg-success border-success-dark hover:bg-success/90 shadow-[0_5px_10px_rgb(0,68,255,0.12)] h-10 leading-10 text-[15px]"
                  href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fchhpt%2Fnextjs-starter&project-name=nextjs-starter&repository-name=nextjs-starter"
                  target="_blank"
                  rel="noreferrer"
                >
                  Clone &amp; Deploy
                </a>
              </span>
            </nav>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}
