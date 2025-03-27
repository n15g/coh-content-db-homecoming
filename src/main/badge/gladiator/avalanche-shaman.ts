import { BadgeData, badgeLink } from 'coh-content-db'
import { Banisher } from '../defeat/banisher'

export const AvalancheShaman: BadgeData = {
  type: 'GLADIATOR',
  key: 'avalanche-shaman',
  setTitle: { id: 489 },
  name: [
    { value: 'Avalanche Shaman' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'These shamans acknowledge your might.' },
  ],
  acquisition: `Earn the ${badgeLink(Banisher)} Badge (Banished Pantheon)`,
  links: [
    { title: 'Avalanche Shaman Badge', href: 'https://homecoming.wiki/wiki/Avalanche_Shaman_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/gladiator/gladiator.png' },
  ],
}
