import {
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
  TwitterLogo,
} from '@phosphor-icons/react';
import classNames from 'classnames';
import { IconContainer } from '../baseComponents/icon/IconContainer';

export enum SocialElementType {
  Twitter = 'twitter',
  Github = 'github',
  Linkedin = 'linkedin',
  Medium = 'medium',
  Instagram = 'instagram',
  Facebook = 'facebook',
}
const socialIcons = {
  [SocialElementType.Twitter]: { component: TwitterLogo, color: '#1da1f2' },
  [SocialElementType.Github]: { component: GithubLogo, color: '#f5f5f5' },
  [SocialElementType.Linkedin]: { component: LinkedinLogo, color: ' #0a66c2' },
  [SocialElementType.Medium]: { component: MediumLogo, color: ' #fff' },
  [SocialElementType.Instagram]: { component: InstagramLogo, color: '#c32aa3' },
  [SocialElementType.Facebook]: { component: FacebookLogo, color: '#1877f2' },
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
    <ul className={classNames('flex gap-1 text-3xl lg:mt-0 my-4')} aria-label="Social media">
      {Object.entries(data).map(([key, value]) => {
        const socialIconComponent = socialIcons[key as SocialElementType].component;
        const accentColor = socialIcons[key as SocialElementType].color;
        return (
          <li key={key}>
            <a href={value.url} className="inline-block p-1" target="_blank">
              <IconContainer icon={socialIconComponent} hoverColor={accentColor} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
