import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../zone/cap-au-diable'

export const DoomSayer: BadgeData = {
  type: 'exploration',
  key: 'doom-sayer',
  setTitleId: [1492],
  name: 'Doom Sayer',
  releaseDate: '2012-11-30',
  morality: 'rogue-isles-access',
  badgeText: `The Luddites have taken over this part of the forest and use it as their main gathering place to preach about the evil schemes of Dr. Aeon.
Sometimes they just theorize the significance of the orange pipes. Despite their attempts to malign his character, Dr. Aeon has yet to drive them out of the area.`,
  notes: `Located in the Vagabond Hills neighborhood, in the construction area 131 yards west of the neighborhood marker, near a bulldozer.`,
  links: [
    { title: 'Doom Sayer Badge', href: 'https://homecoming.wiki/wiki/Doom_Sayer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: CapAuDiable.key, coords: [2234, 0, -1330], icon: 'badge', iconText: '6' } },
  ],
}
