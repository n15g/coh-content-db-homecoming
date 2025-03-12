import { BadgeData } from 'coh-content-db'

export const MonitorDuty: BadgeData = {
  type: 'DAY_JOB',
  key: 'monitor-duty',
  setTitle: { id: 1048 },
  name: [
    { value: 'Monitor Duty' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{
    value: 'Your time spent protecting your Supergroup\'s base has earned you the Monitor Duty Day Job.'
      + ' Logging out in your Supergroup base will earn you charges for your Base Teleporter power.',
  }],
  acquisition: 'Log out inside your Supergroup Base for 100 hours.',
  effect: 'Day Job: Base Teleporter',
  links: [
    { title: 'Monitor Duty Badge', href: 'https://homecoming.wiki/wiki/Monitor_Duty_Badge' },
    { title: 'Day Jobs', href: 'https://homecoming.wiki/wiki/Day_Jobs' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/day-job/monitor-duty.png' }],
}
