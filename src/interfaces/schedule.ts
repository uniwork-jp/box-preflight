import { siteId } from './site';

/*—— scheduleState ————————*/
export interface schedule {
  siteScheduleId: number,
  siteId: siteId,
  year: string,
  month: string,
  date: string,
  time: string[],
}
