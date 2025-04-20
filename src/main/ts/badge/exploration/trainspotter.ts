import { BadgeData } from 'coh-content-db'
import { UndergroundNova } from '../../zone/underground-nova'

export const Trainspotter: BadgeData = {
  type: 'exploration',
  key: 'trainspotter',
  setTitleId: [1641],
  name: 'Trainspotter',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `In this subterranean maintenance bay the Clockwork maintain and repair Praetoria's monorail cars.
Here you may find some of the older cars that have since gone out of service: a trainspotter's dream.`,
  notes: `Located 565 yards SE of the Imperial Tunnel point.`,
  links: [
    { title: 'Trainspotter Badge', href: 'https://homecoming.wiki/wiki/Trainspotter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: UndergroundNova.key, coords: [-1840, 511, -760], icon: 'badge', iconText: '6' } },
  ],
}
