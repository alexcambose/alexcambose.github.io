import Image from 'next/image';

interface WorkTimelineHeaderProps {
  title: string;
  company: string;
  subtitle?: string;
  companyImageUrl: string;
}
export const WorkTimelineHeader = ({
  title,
  company,
  subtitle,
  companyImageUrl,
}: WorkTimelineHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-2xl dark:text-highlighted-dark">
          <span className="capitalize">{title}</span> - {company}
        </h3>
        {subtitle && <h5 className="text-xl mt-1 capitalize">{subtitle}</h5>}
      </div>
      <Image
        width={50}
        height={50}
        style={{ width: '30px', height: 'auto' }}
        className="select-none"
        src={companyImageUrl}
        alt={`${company} logo`}
      />
    </div>
  );
};
