import { BadgeData } from 'coh-content-db'
import { SharkheadIsle } from '../../zone/sharkhead-isle'

export const CarpingTheDiem: BadgeData = {
  type: 'exploration',
  key: 'carping-the-diem',
  setTitleId: [1499],
  name: 'Carping the Diem',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `The Carpe Diem is the Family's 'flagship' for various overseas deals that they make. The ship is periodically grounded to deal with troublesome Scrapyarders.`,
  notes: `Located in the Port Recluse neighborhood, in front of the cabin door of the ship in dry dock, 412 yards northwest of the neighborhood marker.`,
  links: [
    { title: 'Carping the Diem Badge', href: 'https://homecoming.wiki/wiki/Carping_the_Diem_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: SharkheadIsle.key, coords: [-1, 8, -1986], icon: 'badge', iconText: '8' } },
  ],
}
