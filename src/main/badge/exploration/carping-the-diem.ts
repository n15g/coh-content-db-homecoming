import { BadgeData, mapLink } from 'coh-content-db'
import { SharkheadIsle } from '../../map/sharkhead-isle'

export const CarpingTheDiem: BadgeData = {
  type: 'EXPLORATION',
  key: 'carping-the-diem',
  setTitle: { id: 1499 },
  name: [{ value: 'Carping the Diem' }],
  alignment: ['V'],
  mapKey: SharkheadIsle.key,
  loc: [-1, 8, -1986],
  badgeText: [{
    value: `The Carpe Diem is the Family's 'flagship' for various overseas deals that they make.
 The ship is periodically grounded to deal with troublesome Scrapyarders.`,
  }],
  notes: `Located in ${mapLink(SharkheadIsle)}, in the Port Recluse neighborhood.

It is in front of the cabin door of the ship in dry dock, 412 yards northwest of the neighborhood marker.`,
  links: [
    { title: 'Carping the Diem Badge', href: 'https://homecoming.wiki/wiki/Carping_the_Diem_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '8',
}
