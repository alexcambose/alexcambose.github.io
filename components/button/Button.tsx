import { HTMLAttributes } from 'react'
import classNames from 'classnames'
import { useTheme } from '@/theme'

type ButtonProps = { fullWidth?: boolean } & HTMLAttributes<HTMLButtonElement>

export const Button = ({ fullWidth, ...props }: ButtonProps) => {
  const theme = useTheme()

  return (
    <button
      {...props}
      className={classNames(theme.button.base, { [theme.button.fullWidth]: fullWidth })}
    />
  )
}
