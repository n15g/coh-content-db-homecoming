import { BadgeData } from 'coh-content-db'
import { Neutropolis } from '../../zone/neutropolis'

export const Airlift: BadgeData = {
  type: 'exploration',
  key: 'airlift',
  setTitleId: [1724],
  name: 'Airlift',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `Airplanes are the only way to reach some areas with necessary supplies and materiel.
Most jets here are much faster than they look, and must fly far out over the ocean to avoid shattering every window in the Magisterium when they accelerate past mach.`,
  notes: `Located at the end of the runway 677 yards SW of the Lambda Sector marker.`,
  links: [
    { title: 'Airlift Badge', href: 'https://homecoming.wiki/wiki/Airlift_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/praetorian.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: Neutropolis.key, coords: [7228, -71, 1280], icon: 'badge', iconText: '1' } },
  ],
}
