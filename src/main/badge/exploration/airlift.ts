import { BadgeData, mapLink } from 'coh-content-db'
import { Neutropolis } from '../../map/neutropolis'

export const Airlift: BadgeData = {
  type: 'EXPLORATION',
  key: 'airlift',
  setTitle: { id: 1724 },
  name: [{ value: 'Airlift' }],
  alignment: ['H', 'V', 'P'],
  mapKey: Neutropolis.key,
  loc: [7228, -71, 1280],
  badgeText: [{
    value: 'Airplanes are the only way to reach some areas with necessary supplies and materiel.'
      + ' Most jets here are much faster than they look, and must fly far out over the ocean to avoid shattering every window in the Magisterium when they accelerate past mach.',
  }],
  notes: `Located in ${mapLink(Neutropolis)} at the end of the runway 677 yards SW of the Lambda Sector marker.`,
  links: [
    { title: 'Airlift Badge', href: 'https://homecoming.wiki/wiki/Airlift_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png' }],
  vidiotMapKey: '1',
}
