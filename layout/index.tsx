import { ReactNode } from 'react'
import Link from 'next/link'
import { Navbar } from './navigation/Navbar'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen border-8 border-blue-500 bg-slate-100">
      <Navbar />
      {children}
    </div>
  )
}
