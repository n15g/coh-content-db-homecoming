import { BadgeData, mapLink } from 'coh-content-db'
import { Praetoria } from '../../map/praetoria'
import { NovaPraetoria } from '../../map/nova-praetoria'
import { ImperialCity } from '../../map/imperial-city'
import { Neutropolis } from '../../map/neutropolis'

export const RailRider: BadgeData = {
  type: 'EXPLORATION',
  key: 'rail-rider',
  setTitle: { id: 1411 },
  name: [{ value: 'Rail Rider' }],
  alignment: ['H', 'V', 'P'],
  mapKey: Praetoria.key,
  badgeText: [{
    value: `It is every Praetorian citizen's duty to preserve the environment by utilizing public transit as much as possible. Praetor Berry thanks you for your patronage.`,
  }],
  notes: `The Rail Rider Badge has three locations in Praetoria, each located inside one of the Cole Transit Authority stations.

          Its coordinates in ${mapLink(NovaPraetoria)} are (-4551, -187, 470), in ${mapLink(ImperialCity)} are (-2384, -238, 755) and in ${mapLink(Neutropolis)} are (2226, -213, 1111).

          It is necessary to visit all three locations to earn this badge.`,
  links: [
    { title: 'Rail Rider Badge', href: 'https://homecoming.wiki/wiki/Rail Rider_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: 'T',
}
