import { BadgeData, badgeLink } from 'coh-content-db'
import { Legionnaire } from '../defeat/legionnaire'

export const SmasherElite: BadgeData = {
  type: 'GLADIATOR',
  key: 'smasher-elite',
  setTitle: { id: 493 },
  name: [
    { value: 'Smasher Elite' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'The Warriors respect those who fight.' },
  ],
  acquisition: `Earn the ${badgeLink(Legionnaire)} Badge (Warriors)`,
  links: [
    { title: 'Smasher Elite Badge', href: 'https://homecoming.wiki/wiki/Smasher_Elite_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
