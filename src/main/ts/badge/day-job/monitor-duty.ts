import { BadgeData } from 'coh-content-db'

export const MonitorDuty: BadgeData = {
  type: 'day-job',
  key: 'monitor-duty',
  setTitleId: [1048],
  name: 'Monitor Duty',
  morality: 'all',
  badgeText: `Your time spent protecting your Supergroup's base has earned you the Monitor Duty Day Job.
Logging out in your Supergroup base will earn you charges for your Base Teleporter power.`,
  acquisition: 'Log out inside your Supergroup Base for 100 hours.',
  links: [
    { title: 'Monitor Duty Badge', href: 'https://homecoming.wiki/wiki/Monitor_Duty_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/monitor-duty.png',
}
