import { BadgeData } from 'coh-content-db'
import { Croatoa } from '../../zone/croatoa'

export const GrimWanderer: BadgeData = {
  type: 'EXPLORATION',
  key: 'grim-wanderer',
  setTitle: { id: 408 },
  name: [{ value: 'Grim Wanderer' }],
  alignment: ['H'],
  zoneKey: Croatoa.key,
  loc: [762, 48, -2440],
  badgeText: [{
    value: 'This deadly valley is witness to some of the most brutal battles in all of Croatoa.',
  }],
  notes: 'Located on the floor of the Grim Vale between the three standing stones.',
  links: [
    { title: 'Grim Wanderer Badge', href: 'https://homecoming.wiki/wiki/Grim_Wanderer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '1',
}
