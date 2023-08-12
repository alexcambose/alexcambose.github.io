import dayjs from 'dayjs';
import { WorkTimelineItem } from './types';
import classNames from 'classnames';

type WorkTimelineDateProps = Pick<WorkTimelineItem, 'startDate' | 'endDate'>;
export const WorkTimelineDate = ({ startDate, endDate }: WorkTimelineDateProps) => {
  const sameYear = startDate.getFullYear() === endDate?.getFullYear();
  const startDateFormat = sameYear
    ? dayjs(startDate).format('MMM')
    : dayjs(startDate).format('YYYY');
  const endDateFormat = (() => {
    if (!endDate) return 'present';
    if (sameYear) {
      return dayjs(endDate).format('MMM YYYY');
    }
    return dayjs(endDate).format('YYYY');
  })();
  return (
    <span className={classNames(' mr-3 text-sm uppercase tracking-wide')}>
      <span className="whitespace-pre">{startDateFormat}</span> -{' '}
      <span className="whitespace-pre">{endDateFormat}</span>
    </span>
  );
};
