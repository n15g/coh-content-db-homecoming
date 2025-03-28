import { BadgeData, zoneLink } from 'coh-content-db'
import { AtlasPark } from '../../zone/atlas-park'

export const Rookie: BadgeData = {
  type: 'EXPLORATION',
  key: 'rookie',
  setTitle: { id: 2025 },
  name: [{ value: 'Rookie' }],
  alignment: ['H'],
  badgeText: [{ value: `Newly registered heroes in Paragon City often start out in Atlas Park, where they can speak with more established heroes to receive advice and guidance.` }],
  zoneKey: AtlasPark.key,
  loc: [128.5, 16.4, -233],
  notes: `Located behind Ms. Liberty, who stands in front of the new character spawn point in ${zoneLink(AtlasPark)}.`,
  links: [
    { title: 'Rookie Badge', href: 'https://homecoming.wiki/wiki/Rookie_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '4',
}
