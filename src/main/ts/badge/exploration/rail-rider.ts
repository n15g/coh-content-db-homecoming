import { BadgeData } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'
import { ImperialCity } from '../../zone/imperial-city'
import { Neutropolis } from '../../zone/neutropolis'

export const RailRider: BadgeData = {
  type: 'exploration',
  key: 'rail-rider',
  setTitleId: [1411],
  name: 'Rail Rider',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `It is every Praetorian citizen's duty to preserve the environment by utilizing public transit as much as possible. Praetor Berry thanks you for your patronage.`,
  notes: `The Rail Rider Badge has three locations in Praetoria, each located inside one of the Cole Transit Authority stations.

It is necessary to visit all three locations to earn this badge.`,
  links: [
    { title: 'Rail Rider Badge', href: 'https://homecoming.wiki/wiki/Rail_Rider_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'np', type: 'location', location: { zoneKey: NovaPraetoria.key, coords: [-4551, -187, 470], icon: 'badge', iconText: 'T' } },
    { key: 'ic', type: 'location', location: { zoneKey: ImperialCity.key, coords: [-2384, -238, 755], icon: 'badge', iconText: 'T' } },
    { key: 'ne', type: 'location', location: { zoneKey: Neutropolis.key, coords: [2226, -213, 1111], icon: 'badge', iconText: 'T' } },
  ],
}
