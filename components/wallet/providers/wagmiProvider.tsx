import { ReactNode } from 'react'
import { WagmiConfig, configureChains, createConfig, mainnet } from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_API_KEY ?? '' }), publicProvider()]
)

const connectors = [
  new MetaMaskConnector({ chains }),
  new CoinbaseWalletConnector({
    chains,
    options: {
      appName: 'wagmi',
    },
  }),
  new WalletConnectConnector({
    chains,
    options: {
      projectId: process.env.WALLETCONNECT_PROJECT_ID ?? '',
    },
  }),
]

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export const WagmiProvider = ({ children }: { children: ReactNode }) => (
  <WagmiConfig config={config}>{children}</WagmiConfig>
)
