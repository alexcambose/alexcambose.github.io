import dayjs from 'dayjs';
import { WorkTimelineItem } from './types';
import classNames from 'classnames';

type WorkTimelineDateProps = Pick<WorkTimelineItem, 'startDate' | 'endDate'>;
export const WorkTimelineDate = ({ startDate, endDate }: WorkTimelineDateProps) => {
  return (
    <span className={classNames(' mr-3 text-sm uppercase tracking-wide')}>
      <span className="whitespace-pre">{dayjs(startDate).format('MMM YYYY')}</span> -{' '}
      <span className="whitespace-pre">
        {endDate ? dayjs(endDate).format('MMM YYYY') : 'present'}
      </span>
    </span>
  );
};
