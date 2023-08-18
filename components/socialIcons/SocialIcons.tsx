import classNames from 'classnames';
import { IconContainer } from '../baseComponents/icon/IconContainer';
import {
  SuitcaseSimple,
  FacebookLogo,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  MediumLogo,
  TwitterLogo,
} from '@/utils/icons';

export enum SocialElementType {
  Twitter = 'twitter',
  Github = 'github',
  Linkedin = 'linkedin',
  Medium = 'medium',
  Instagram = 'instagram',
  Facebook = 'facebook',
  Upwork = 'upwork',
}
const socialIcons = {
  [SocialElementType.Twitter]: { component: TwitterLogo, color: '#1da1f2', label: 'Twitter' },
  [SocialElementType.Github]: { component: GithubLogo, color: '#f5f5f5', label: 'Github' },
  [SocialElementType.Linkedin]: { component: LinkedinLogo, color: ' #0a66c2', label: 'LinkedIn' },
  [SocialElementType.Medium]: { component: MediumLogo, color: ' #fff', label: 'Medium' },
  [SocialElementType.Instagram]: { component: InstagramLogo, color: '#c32aa3', label: 'Instagram' },
  [SocialElementType.Facebook]: { component: FacebookLogo, color: '#1877f2', label: 'Facebook' },
  [SocialElementType.Upwork]: { component: SuitcaseSimple, color: '#108a00', label: 'Upwork' },
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
        const label = socialIcons[key as SocialElementType].label;
        return (
          <li key={key}>
            <a href={value.url} title={label} className="inline-block p-1" target="_blank">
              <IconContainer icon={socialIconComponent} hoverColor={accentColor} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
