import { BadgeData, badgeLink } from 'coh-content-db'
import { Regenerator } from '../defeat/regenerator'

export const Caliban: BadgeData = {
  type: 'GLADIATOR',
  key: 'caliban',
  setTitle: { id: 481 },
  name: [
    { value: 'Caliban' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'The Trolls respect your might.' },
  ],
  acquisition: `Earn the ${badgeLink(Regenerator)} Badge (Trolls)`,
  links: [
    { title: 'Caliban Badge', href: 'https://homecoming.wiki/wiki/Caliban_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
