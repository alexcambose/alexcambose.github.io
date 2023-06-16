import Image, { ImageProps } from 'next/image'

export const Icon = (props: ImageProps) => (
  <Image width={50} height={50} className="mr-2 w-7" priority {...props} />
)
