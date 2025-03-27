import { BadgeData, badgeLink } from 'coh-content-db'
import { DemonSlayer } from '../defeat/demon-slayer'

export const BehemothOverlord: BadgeData = {
  type: 'GLADIATOR',
  key: 'behemoth-overlord',
  setTitle: { id: 503 },
  name: [
    { value: 'Behemoth Overlord' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'Even demons obey your will.' },
  ],
  acquisition: `Earn the ${badgeLink(DemonSlayer)} Badge (Circle of Thorns)`,
  links: [
    { title: 'Behemoth Overlord Badge', href: 'https://homecoming.wiki/wiki/Behemoth_Overlord_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
