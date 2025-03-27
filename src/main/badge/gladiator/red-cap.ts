import { BadgeData, badgeLink } from 'coh-content-db'
import { Toothbreaker } from '../event/toothbreaker'

export const RedCap: BadgeData = {
  type: 'GLADIATOR',
  key: 'red-cap',
  setTitle: { id: 529 },
  name: [
    { value: 'Red Cap' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You now can summon a Red Cap Rascal in the Arena pet battles.' },
  ],
  acquisition: `Earn the ${badgeLink(Toothbreaker)} Badge (Red Caps)`,
  links: [
    { title: 'Red Cap Badge', href: 'https://homecoming.wiki/wiki/Red_Cap_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
