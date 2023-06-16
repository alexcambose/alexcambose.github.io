import { ReactNode } from 'react'
import { WalletNav } from './navigation/WalletNav'
import { Navbar } from './navigation/Navbar'
import { Container } from '@/components/layout/Container'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen border-8 border-blue-500 bg-slate-100">
      <WalletNav />
      <Container>
        <Navbar />
        {children}
      </Container>
    </div>
  )
}
