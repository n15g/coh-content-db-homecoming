import { BadgeData } from 'coh-content-db'
import { CapAuDiable } from '../../zone/cap-au-diable'

export const DoomSayer: BadgeData = {
  type: 'EXPLORATION',
  key: 'doom-sayer',
  setTitle: { id: 1492 },
  name: [{ value: 'Doom Sayer' }],
  alignment: ['V'],
  zoneKey: CapAuDiable.key,
  loc: [2234, 0, -1330],
  badgeText: [{
    value: 'The Luddites have taken over this part of the forest and use it as their main gathering place to preach about the evil schemes of Dr. Aeon.'
      + ' Sometimes they just theorize the significance of the orange pipes.'
      + ' Despite their attempts to malign his character, Dr. Aeon has yet to drive them out of the area.',
  }],
  notes: 'The Doom Sayer Badge is located in the Vagabond Hills neighborhood of Cap au Diable.'
    + ' It is in the construction area 131 yards west of the neighborhood marker near a bulldozer.',
  links: [
    { title: 'Doom Sayer Badge', href: 'https://homecoming.wiki/wiki/Doom_Sayer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' }],
  vidiotMapKey: '6',
}
