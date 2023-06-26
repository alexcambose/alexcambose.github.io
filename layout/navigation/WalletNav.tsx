'use client';
import { Modal } from '@/components';
import { ClientOnly } from '@/components/ClientOnly';
import { Button } from '@/components/baseComponents/button/Button';
import { ConnectWalletButtons } from '@/components/wallet/ConnectWalletButtons';
import { WalletButton } from '@/components/wallet/WalletButton';
import classNames from 'classnames';
import { useState } from 'react';
import { useAccount } from 'wagmi';

export const WalletNav = () => {
  return (
    <ClientOnly>
      <header>
        <WalletButton className={classNames('absolute top-0 right-0')} />
      </header>
    </ClientOnly>
  );
};
