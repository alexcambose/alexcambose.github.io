import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from '@phosphor-icons/react';
import classNames from 'classnames';

export enum SocialElementType {
  Twitter = 'twitter',
  Github = 'github',
  Linkedin = 'linkedin',
  Instagram = 'instagram',
  Facebook = 'facebook',
}
const socialIcons = {
  [SocialElementType.Twitter]: TwitterLogo,
  [SocialElementType.Github]: GithubLogo,
  [SocialElementType.Linkedin]: LinkedinLogo,
  [SocialElementType.Instagram]: InstagramLogo,
  [SocialElementType.Facebook]: FacebookLogo,
};
interface SocialIconsProps {
  data: {
    [key in SocialElementType]: {
      url: string;
    };
  };
}
export const SocialIcons = ({ data }: SocialIconsProps) => {
  return (
    <ul className={classNames('flex')}>
      {Object.entries(data).map(([key, value]) => {
        const SocialIconComponent = socialIcons[key as SocialElementType];
        return (
          <li key={key}>
            <a href={value.url}>
              <SocialIconComponent />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
