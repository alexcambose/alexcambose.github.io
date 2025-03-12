import { Badge } from '../baseComponents/badge/Badge';
import { BadgeList } from '../baseComponents/badge/BadgeList';
import { WorkTimelineContent } from './WorkTimelineContent';
import { WorkTimelineDate } from './WorkTimelineDate';
import { WorkTimelineHeader } from './WorkTimelineHeader';
import { WorkTimelineItem } from './types';

interface WorkTimelineProps {
  data: WorkTimelineItem[];
}

export const WorkTimeline = ({ data }: WorkTimelineProps) => {
  const sortedData = data.sort(
    (itemA, itemB) => itemB.startDate.getTime() - itemA.startDate.getTime()
  );

  return (
    <ul>
      {sortedData.map((item) => {
        return (
          <li
            className="mt-8 flex flex-col lg:flex-row lg:first:mt-0"
            key={item.title + item.companyName}
          >
            <div className="w-full lg:mr-4 lg:w-1/12 xl:w-2/12">
              <WorkTimelineDate startDate={item.startDate} endDate={item.endDate} />
            </div>
            <div className="w-full lg:w-11/12 xl:w-10/12">
              <WorkTimelineHeader
                subtitle={item.subtitle}
                title={item.title}
                company={item.companyName}
                companyImageUrls={item.companyImageUrls}
                companyUrl={item.companyUrl}
              />
              <p className="text-sm italic">{item.companyDescription}</p>
              <WorkTimelineContent className="mt-2 text-sm">{item.description}</WorkTimelineContent>
              <BadgeList>
                {item.techStack.map((techLabel) => (
                  <Badge key={techLabel}>{techLabel}</Badge>
                ))}
              </BadgeList>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
