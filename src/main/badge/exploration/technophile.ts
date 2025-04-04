import { BadgeData, zoneLink } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'

export const Technophile: BadgeData = {
  type: 'EXPLORATION',
  key: 'technophile',
  setTitle: { id: 1592 },
  name: [{ value: 'Technophile' }],
  alignment: ['H', 'V', 'P'],
  zoneKey: NovaPraetoria.key,
  loc: [-6336, -16, 2],
  badgeText: [{
    value: `It takes a certain kind of person to find affinity with the city's Clockwork; that person is you, Technophile.`,
  }],
  notes: `Located in ${zoneLink(NovaPraetoria)} in the City Maintenance Facility 210 yards N of the SE Elyssian Avenue marker (There are two markers for Elyssian Avenue).`,
  links: [
    { title: 'Technophile Badge', href: 'https://homecoming.wiki/wiki/Technophile_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '6',
}
