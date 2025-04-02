import { BadgeData, badgeLink } from 'coh-content-db'
import { Celebrant } from '../event/celebrant'
import { Reveler } from '../event/reveler'
import { ColumnBreaker } from '../accomplishment/column-breaker'

export const _5thColumnist: BadgeData = {
  type: 'GLADIATOR',
  key: '5th-columnist',
  setTitle: { id: 612 },
  name: [
    { value: '5th Columnist' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'For having both the 1st and 2nd Anniversary badges on one character, or by defeating the Reichsman, you have been granted access to a 5th Column Gladiator!',
    },
  ],
  notes: `You only need to earn either the ${badgeLink(Celebrant)} and ${badgeLink(Reveler)} badges, or earn the ${badgeLink(ColumnBreaker)} badge instead.`,
  links: [
    { title: '5th Columnist Badge', href: 'https://homecoming.wiki/wiki/5th_Columnist_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
  requirements: [
    { key: Celebrant.key, type: 'BADGE', badgeKey: Celebrant.key },
    { key: Reveler.key, type: 'BADGE', badgeKey: Reveler.key },
    { key: ColumnBreaker.key, type: 'BADGE', badgeKey: ColumnBreaker.key },
  ],
}
