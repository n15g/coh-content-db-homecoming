import { BadgeData, badgeLink } from 'coh-content-db'
import { Liberator } from '../accomplishment/liberator'

export const Boulder: BadgeData = {
  type: 'GLADIATOR',
  key: 'boulder',
  setTitle: { id: 488 },
  name: [
    { value: 'Boulder' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You have might over nature itself.' },
  ],
  acquisition: `Earn the ${badgeLink(Liberator)} Badge (Devouring Earth)`,
  links: [
    { title: 'Boulder Badge', href: 'https://homecoming.wiki/wiki/Boulder_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
