import { BadgeData } from 'coh-content-db'
import { EchoDarkAstoria } from '../../zone/echo-dark-astoria'

export const DarkMystic: BadgeData = {
  type: 'exploration',
  key: 'dark-mystic',
  setTitleId: [128],
  name: 'Dark Mystic',
  morality: 'paragon-city-access',
  badgeText: `Some once claimed the reason the spirits walk the streets of Dark Astoria is the fact that there is a powerful Ley Line nexus in the middle of Moth Cemetery. They have since learned the truth.`,
  notes: `Located 309 yards due north of the Dido's View marker.`,
  links: [
    { title: 'Dark Mystic Badge', href: 'https://homecoming.wiki/wiki/Dark_Mystic_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: EchoDarkAstoria.key, coords: [1678, 6, 2833] }, vidiotMapKey: '1' },
  ],
}
