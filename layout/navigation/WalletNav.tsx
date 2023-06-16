import { Modal } from '@/components'
import { ClientOnly } from '@/components/ClientOnly'
import { Button } from '@/components/button/Button'
import { ConnectWalletButtons } from '@/components/wallet/ConnectWalletButtons'
import { useState } from 'react'
import { useAccount } from 'wagmi'

export const WalletNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { address, isConnected } = useAccount()

  const connectWalletButton = <Button onClick={() => setIsOpen(true)}>Connect Wallet</Button>
  const connectedLabel = <Button onClick={() => setIsOpen(true)}>{address}</Button>

  return (
    <ClientOnly>
      <header>
        <nav>{isConnected ? connectedLabel : connectWalletButton}</nav>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Connect wallet">
          <ConnectWalletButtons />
        </Modal>
      </header>
    </ClientOnly>
  )
}
