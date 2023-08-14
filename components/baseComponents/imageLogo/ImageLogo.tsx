'use client';
import { useTheme } from '@/theme/hooks/useTheme';
import Image, { ImageProps } from 'next/image';
import { ImageTheme, ImageSize } from './types';

export interface ImageLogoProps extends Omit<ImageProps, 'src'> {
  dark: ImageTheme;
  light: ImageTheme;
  smallSizeParams: ImageSize;
  largeSizeParams: ImageSize;
  url?: string;
}

export const ImageLogo = ({
  dark,
  light,
  smallSizeParams,
  largeSizeParams,
  url,
  ...props
}: ImageLogoProps) => {
  const { isDark } = useTheme();

  const imageSizes = isDark ? dark : light;
  const smallImage = (
    <Image
      width={smallSizeParams.width || 100}
      height={smallSizeParams.height || 100}
      style={{ width: smallSizeParams.width || 100, height: smallSizeParams.height || 'auto' }}
      className="select-none"
      src={imageSizes.small}
      {...props}
    />
  );
  const largeImage = (
    <Image
      width={largeSizeParams.width || 100}
      height={largeSizeParams.height || 100}
      style={{ width: largeSizeParams.width || 100, height: largeSizeParams.height || 'auto' }}
      className="select-none"
      src={imageSizes.large}
      {...props}
    />
  );
  const images = (
    <>
      <span className="lg:hidden max-h-5">{smallImage}</span>
      <span className="hidden lg:inline-block max-h-5">{largeImage}</span>
    </>
  );
  return url ? (
    <a href={url} rel="noopener noreferrer" target="_blank">
      {images}
    </a>
  ) : (
    images
  );
};
