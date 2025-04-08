import { BadgeData } from 'coh-content-db'
import { DrKahn } from '../../contact/dr-khan'

export const ColumnBreaker: BadgeData = {
  type: 'accomplishment',
  key: 'column-breaker',
  setTitleId: [1293],
  name: 'Column Breaker',
  morality: 'heroic',
  badgeText: `Even though Reichsman managed to escape, you know you've stopped his plans to form an unstoppable allegiance of evil.`,
  links: [
    { title: 'Column Breaker Badge', href: 'https://homecoming.wiki/wiki/Column_Breaker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/column-breaker.png',
  requirements: [
    { key: 'dr-khan-task-force', type: 'TASK_FORCE', missionName: 'Dr. Khan Task Force', contactKey: DrKahn.key },
  ],
}
