import { BadgeData, mapLink } from 'coh-content-db'
import { EchoDarkAstoria } from '../../map/echo-dark-astoria'

export const DarkMystic: BadgeData = {
  type: 'EXPLORATION',
  key: 'dark-mystic',
  setTitle: { id: 128 },
  name: [{ value: 'Dark Mystic' }],
  alignment: ['H'],
  mapKey: EchoDarkAstoria.key,
  loc: [1678, 6, 2833],
  badgeText: [{
    value: 'Some once claimed the reason the spirits walk the streets of Dark Astoria is the fact that there is a powerful Ley Line nexus in the middle of Moth Cemetery.'
      + ' They have since learned the truth.',
  }],
  notes: `Located in ${mapLink(EchoDarkAstoria)} 309 yards due north of the Dido's View marker.`,
  links: [
    { title: 'Dark Mystic Badge', href: 'https://homecoming.wiki/wiki/Dark_Mystic_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '1',
}
