import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'
import { ReactNode } from 'react'

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
})

export const WagmiProvider = ({ children }: { children: ReactNode }) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>
}
