import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../zone/cap-au-diable'

export const Sparky: BadgeData = {
  type: 'exploration',
  key: 'sparky',
  setTitleId: [269],
  name: 'Sparky',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `You've spent time wandering around in the Power Transport System at Mount Diable.`,
  notes: `Located in the Power Transport System station in the Mount Diable neighborhood.

There is a building with two large electrical quad-towers on it. The badge marker is on top of the building, right in the middle of those two towers.`,
  links: [
    { title: 'Sparky Badge', href: 'https://homecoming.wiki/wiki/Sparky_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CapAuDiable.key, coords: [-2432, 294, -1248], icon: 'badge', iconText: '1' } },
  ],
}
