import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}
export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="grid place-content-center">
      {' '}
      <main className="w-200 bg-red-200">{children}</main>
    </div>
  )
}
