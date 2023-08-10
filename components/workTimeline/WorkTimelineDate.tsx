import dayjs from 'dayjs';
import { WorkTimelineItem } from './types';
import classNames from 'classnames';

type WorkTimelineDateProps = Pick<WorkTimelineItem, 'startDate' | 'endDate'>;
export const WorkTimelineDate = ({ startDate, endDate }: WorkTimelineDateProps) => {
  return (
    <span className={classNames('w-3/12')}>
      {dayjs(startDate).format('MMM YYYY')} - {dayjs(endDate).format('MMM YYYY')}
    </span>
  );
};
