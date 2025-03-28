import { BadgeData } from 'coh-content-db'
import { Boomtown } from '../../zone/boomtown'

export const Phalanxer: BadgeData = {
  type: 'EXPLORATION',
  key: 'phalanxer',
  setTitle: { id: 114 },
  name: [{ value: 'Phalanxer' }],
  alignment: ['H'],
  zoneKey: Boomtown.key,
  loc: [-2002, -16, 5180],
  badgeText: [{ value: 'Before Baumton had its \'accident,\' the Freedom Phalanx called this building home.' }],
  notes: 'The Phalanxer Badge is located in The Fuse neighborhood of Boomtown. It is located at the northeast corner of a building just northeast of the Steel Canyon entrance to the zone.'
    + '\n\nThe badge marker is approximately 230 yards northeast of the entrance.',
  links: [
    { title: 'Phalanxer Badge', href: 'https://homecoming.wiki/wiki/Phalanxer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hazard.png' }],
  vidiotMapKey: '1',
}
