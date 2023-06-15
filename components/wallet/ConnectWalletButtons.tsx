import React from 'react'
import Image from 'next/image'
import { Button } from '../button/Button'
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { useIsMounted } from '@/hooks'
import metamaskIcon from '../../public/metamask.svg'

export const ConnectWalletButtons = () => {
  const { address, connector, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ address })
  const { data: ensName } = useEnsName({ address })
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  const { disconnect } = useDisconnect()
  const isMounted = useIsMounted()

  if (!isMounted) return null
  if (isConnected) {
    return (
      <div>
        <img src={ensAvatar} alt="ENS Avatar" />
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        <div>Connected to {connector.name}</div>
        <Button onClick={() => disconnect()}>Disconnect</Button>
      </div>
    )
  }

  return (
    <div>
      {connectors.map((connector) => (
        <Button
          fullWidth
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          <Image
            width={50}
            height={50}
            className="w-7"
            priority
            src={metamaskIcon}
            alt="Follow us on Twitter"
          />
          {connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading && connector.id === pendingConnector?.id && ' (connecting)'}
        </Button>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  )
}
