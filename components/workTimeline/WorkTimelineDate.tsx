import dayjs from 'dayjs';
import { WorkTimelineItem } from './types';
import classNames from 'classnames';

type WorkTimelineDateProps = Pick<WorkTimelineItem, 'startDate' | 'endDate'>;
export const WorkTimelineDate = ({ startDate, endDate }: WorkTimelineDateProps) => {
  return (
    <span className={classNames('mr-1 text-sm	uppercase tracking-wide')}>
      {dayjs(startDate).format('MMM YYYY')} -{' '}
      {endDate ? dayjs(endDate).format('MMM YYYY') : 'present'}
    </span>
  );
};
