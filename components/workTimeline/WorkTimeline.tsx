import { Badge } from '../baseComponents/badge/Badge';
import { WorkTimelineContent } from './WorkTimelineContent';
import { WorkTimelineDate } from './WorkTimelineDate';
import { WorkTimelineHeader } from './WorkTimelineHeader';
import { WorkTimelineItem } from './types';

interface WorkTimelineProps {
  data: WorkTimelineItem[];
}

export const WorkTimeline = ({ data }: WorkTimelineProps) => {
  return (
    <ul>
      {data.map((item, index) => {
        return (
          <li className="flex mt-12 first:mt-0" key={item.title + item.companyName}>
            <WorkTimelineDate startDate={item.startDate} endDate={item.endDate} />
            <div className="w-9/12">
              <WorkTimelineHeader
                subtitle={item.subtitle}
                title={item.title}
                company={item.companyName}
                companyImageUrl={item.companyImageUrl}
              />
              <WorkTimelineContent>{item.description}</WorkTimelineContent>
              <div className="mt-4">
                {item.techStack.map((techLabel) => (
                  <Badge key={techLabel}>{techLabel}</Badge>
                ))}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
