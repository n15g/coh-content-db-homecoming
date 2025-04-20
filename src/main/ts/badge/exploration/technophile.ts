import { BadgeData } from 'coh-content-db'
import { NovaPraetoria } from '../../zone/nova-praetoria'

export const Technophile: BadgeData = {
  type: 'exploration',
  key: 'technophile',
  setTitleId: [1592],
  name: 'Technophile',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `It takes a certain kind of person to find affinity with the city's Clockwork; that person is you, Technophile.`,
  notes: `Located in the City Maintenance Facility 210 yards north of the southeast Elyssian Avenue marker (There are two markers for Elyssian Avenue).`,
  links: [
    { title: 'Technophile Badge', href: 'https://homecoming.wiki/wiki/Technophile_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: NovaPraetoria.key, coords: [-6336, -16, 2], icon: 'badge', iconText: '6' } },
  ],
}
