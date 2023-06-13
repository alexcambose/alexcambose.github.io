import { Layout } from '@/components'
import '@/styles/global.css'
import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import { WagmiProvider } from '../components/wallet/wagmiProvider'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)

  const app = getLayout(<Component {...pageProps} />)
  return <WagmiProvider>{app}</WagmiProvider>
}
