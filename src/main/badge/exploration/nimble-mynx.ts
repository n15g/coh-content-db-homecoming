import { BadgeData } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'

export const NimbleMynx: BadgeData = {
  type: 'EXPLORATION',
  key: 'nimble-mynx',
  setTitle: { id: 108 },
  name: [{ value: 'Nimble Mynx' }],
  alignment: ['H'],
  zoneKey: SteelCanyon.key,
  loc: [-2428, 48, -3408],
  badgeText: [{
    value: 'This spot is where Synapse first found Mynx and began training her.',
  }],
  notes: 'The Nimble Mynx Badge is in the Silver Lake neighborhood of Steel Canyon.'
    + '\n\nIt is located on the back right (northeastern) side of the building just west of the entrance to Boomtown.',
  links: [
    { title: 'Nimble Mynx Badge', href: 'https://homecoming.wiki/wiki/Nimble_Mynx_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' }],
  vidiotMapKey: '3',
}
