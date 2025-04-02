import { BadgeData } from 'coh-content-db'
import { DrKahn } from '../../contact/dr-khan'

export const ColumnBreaker: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'column-breaker',
  setTitle: { id: 1293 },
  name: 'Column Breaker',
  alignment: ['H'],
  badgeText: `Even though Reichsman managed to escape, you know you've stopped his plans to form an unstoppable allegiance of evil.`,
  links: [
    { title: 'Column Breaker Badge', href: 'https://homecoming.wiki/wiki/Column_Breaker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/column-breaker.png',
  requirements: [
    { key: 'dr-khan-task-force', type: 'TASK_FORCE', missionName: 'Dr. Khan Task Force', contactKey: DrKahn.key },
  ],
}
