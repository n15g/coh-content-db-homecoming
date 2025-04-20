import { BadgeData } from 'coh-content-db'
import { DrKahnTaskForce } from '../../mission/dr-kahn-task-force'

export const ColumnBreaker: BadgeData = {
  type: 'accomplishment',
  key: 'column-breaker',
  setTitleId: [1293],
  name: 'Column Breaker',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `Even though Reichsman managed to escape, you know you've stopped his plans to form an unstoppable allegiance of evil.`,
  links: [
    { title: 'Column Breaker Badge', href: 'https://homecoming.wiki/wiki/Column_Breaker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/column-breaker.png',
  requirements: [
    { key: DrKahnTaskForce.key, type: 'mission', missionKey: DrKahnTaskForce.key },
  ],
}
