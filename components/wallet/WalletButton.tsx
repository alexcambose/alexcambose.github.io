import { ButtonHTMLAttributes, useState } from 'react';
import { useAccount } from 'wagmi';
import { Button } from '../baseComponents/button/Button';
import { ConnectWalletButtons } from './ConnectWalletButtons';
import { Modal } from '../baseComponents/modal/Modal';
import classNames from 'classnames';

type WalletButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const WalletButton = ({ className }: WalletButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { address, isConnected } = useAccount();

  const connectWalletButton = (
    <Button className={classNames(className)} onClick={() => setIsOpen(true)}>
      Connect Wallet
    </Button>
  );

  const connectedLabel = (
    <Button className={classNames(className)} onClick={() => setIsOpen(true)}>
      {address}
    </Button>
  );

  return (
    <>
      {isConnected ? connectedLabel : connectWalletButton}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Connect wallet">
        <ConnectWalletButtons />
      </Modal>
    </>
  );
};
