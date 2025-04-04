import { BadgeData, zoneLink } from 'coh-content-db'
import { SteelCanyon } from '../../zone/steel-canyon'
import { Boomtown } from '../../zone/boomtown'

export const NimbleMynx: BadgeData = {
  type: 'exploration',
  key: 'nimble-mynx',
  setTitleId: [108],
  name: 'Nimble Mynx',
  morality: 'heroic',
  zoneKey: SteelCanyon.key,
  loc: [-2428, 48, -3408],
  badgeText: `This spot is where Synapse first found Mynx and began training her.`,
  notes: `Located in the Silver Lake neighborhood, on the back right (northeastern) side of the building just west of the entrance to ${zoneLink(Boomtown)}.`,
  links: [
    { title: 'Nimble Mynx Badge', href: 'https://homecoming.wiki/wiki/Nimble_Mynx_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '3',
}
