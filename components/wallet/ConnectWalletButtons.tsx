import React from 'react';
import Image from 'next/image';
import { Button } from '../baseComponents/button/Button';
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { useIsMounted } from '@/hooks';
import metamaskIcon from '../../public/metamask.svg';
import walletconnectIcon from '../../public/walletconnect.svg';
import coinbaseIcon from '../../public/coinbase.svg';
import { Icon } from '../icon/Icon';

const icons: { [key: string]: React.ReactNode } = {
  metaMask: <Icon src={metamaskIcon} alt="Connect with MetaMask" />,
  walletConnect: <Icon src={walletconnectIcon} alt="Connect with WalletConnect" />,
  coinbaseWallet: <Icon src={coinbaseIcon} alt="Connect with CoinbaseWallet" />,
};

export const ConnectWalletButtons = () => {
  const { address, connector, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect();
  const { disconnect } = useDisconnect();
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  if (isConnected) {
    return (
      <div>
        <div>{ensName ? `${ensName} (${address})` : address}</div>
        <div>Connected to {connector?.name}</div>
        <Button onClick={() => disconnect()}>Disconnect</Button>
      </div>
    );
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
          {icons[connector.id]}
          {connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading && connector.id === pendingConnector?.id && ' (connecting)'}
        </Button>
      ))}

      {error && <div>{error.message}</div>}
    </div>
  );
};
