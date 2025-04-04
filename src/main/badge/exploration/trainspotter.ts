import { BadgeData, zoneLink } from 'coh-content-db'
import { UndergroundNova } from '../../zone/underground-nova'

export const Trainspotter: BadgeData = {
  type: 'exploration',
  key: 'trainspotter',
  setTitleId: [1641],
  name: 'Trainspotter',
  morality: 'all',
  zoneKey: UndergroundNova.key,
  loc: [-1840, 511, -760],
  badgeText: [{
    value: 'In this subterranean maintenance bay the Clockwork maintain and repair Praetoria\'s monorail cars.'
      + ' Here you may find some of the older cars that have since gone out of service: a trainspotter\'s dream.',
  }],
  notes: `Located in ${zoneLink(UndergroundNova)} 565 yards SE of the Imperial Tunnel point.`,
  links: [
    { title: 'Trainspotter Badge', href: 'https://homecoming.wiki/wiki/Trainspotter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  vidiotMapKey: '6',
}
