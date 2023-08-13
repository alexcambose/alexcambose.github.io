import { ImageLogo } from '../baseComponents/imageLogo/ImageLogo';
import { WorkTimelineItem } from './types';

interface WorkTimelineHeaderProps {
  title: string;
  company: string;
  subtitle?: string;
  companyUrl?: string;
  companyImageUrls: WorkTimelineItem['companyImageUrls'];
}

export const WorkTimelineHeader = ({
  title,
  company,
  subtitle,
  companyUrl,
  companyImageUrls,
}: WorkTimelineHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-xl dark:text-highlighted-dark">
          <span className="capitalize">{title}</span> - {company}
        </h3>
        {subtitle && <h5 className="text-xlcapitalize">{subtitle}</h5>}
      </div>
      <ImageLogo
        alt={`${company} logo`}
        dark={companyImageUrls.dark}
        light={companyImageUrls.light}
        smallSizeParams={companyImageUrls.smallSizeParams}
        largeSizeParams={companyImageUrls.largeSizeParams}
        url={companyUrl}
      />
    </div>
  );
};
