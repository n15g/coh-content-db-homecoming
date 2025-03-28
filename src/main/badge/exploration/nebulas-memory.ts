import { BadgeData, zoneLink } from 'coh-content-db'
import { PerezPark } from '../../zone/perez-park'

export const NebulasMemory: BadgeData = {
  type: 'EXPLORATION',
  key: 'nebulas-memory',
  setTitle: { id: 1774 },
  name: [{ value: 'Nebula\'s Memory' }],
  alignment: ['H'],
  zoneKey: PerezPark.key,
  loc: [-1453, -29, 2990],
  badgeText: [{
    value: 'This statue is all that remains of a novice heroine by the name of Nebula who lost her life saving those of others when the Rikti overran Perez Park.'
      + ' Some have witnessed a lone hero brave the dangers of Perez Park to sit in quiet contemplation at the benches near her statue.'
      + ' This hero\'s identity and the nature of his relationship with Nebula remains a tantalizing mystery.',
  }],
  notes: `Located in ${zoneLink(PerezPark)} 82 yards east of the Everett Lake marker on the map, beneath the statue of Nebula herself.`,
  links: [
    { title: 'Nebula\'s Memory Badge', href: 'https://homecoming.wiki/wiki/Nebula%27s_Memory_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '6',
}
