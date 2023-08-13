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
            className="mt-12 flex flex-col first:mt-0 lg:flex-row"
            key={item.title + item.companyName}
          >
            <div className="max-w-fit text-center">
              <WorkTimelineDate startDate={item.startDate} endDate={item.endDate} />
            </div>
            <div className="lg:w-[76%]">
              <WorkTimelineHeader
                subtitle={item.subtitle}
                title={item.title}
                company={item.companyName}
                companyImageUrls={item.companyImageUrls}
                companyUrl={item.companyUrl}
              />
              <WorkTimelineContent>{item.description}</WorkTimelineContent>
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
