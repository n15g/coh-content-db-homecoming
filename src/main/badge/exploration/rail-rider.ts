import { BadgeData, zoneLink } from 'coh-content-db'
import { Praetoria } from '../../zone/praetoria'
import { NovaPraetoria } from '../../zone/nova-praetoria'
import { ImperialCity } from '../../zone/imperial-city'
import { Neutropolis } from '../../zone/neutropolis'

export const RailRider: BadgeData = {
  type: 'EXPLORATION',
  key: 'rail-rider',
  setTitle: { id: 1411 },
  name: [{ value: 'Rail Rider' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: Praetoria.key,
  badgeText: [{
    value: `It is every Praetorian citizen's duty to preserve the environment by utilizing public transit as much as possible. Praetor Berry thanks you for your patronage.`,
  }],
  notes: `The Rail Rider Badge has three locations in Praetoria, each located inside one of the Cole Transit Authority stations.

Its coordinates in ${zoneLink(NovaPraetoria)} are (-4551, -187, 470), in ${zoneLink(ImperialCity)} are (-2384, -238, 755) and in ${zoneLink(Neutropolis)} are (2226, -213, 1111).

It is necessary to visit all three locations to earn this badge.`,
  links: [
    { title: 'Rail Rider Badge', href: 'https://homecoming.wiki/wiki/Rail Rider_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: 'T',
}
