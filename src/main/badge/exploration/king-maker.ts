import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { MayhemKingsRow } from '../../map/mayhem-kings-row'

export const KingMaker: BadgeData = {
  type: 'EXPLORATION',
  key: 'king-maker',
  setTitle: { id: 556 },
  name: [{ value: 'King Maker' }],
  alignment: ['V'],
  mapKey: MayhemKingsRow.key,
  badgeText: [{
    value: 'This is the spot in Kings Row of a famous bloodbath where the Marcone made a vicious power play against the Verandi.',
  }],
  loc: [-252, -42, -2515],
  notes: 'Located approximately 113 yards northeast of the Bank.\n'
    + '\n'
    + SAFEGUARD_MAYHEM_CONTACT_FRAGMENT,
  links: [
    { title: 'King Maker Badge', href: 'https://homecoming.wiki/wiki/King_Maker_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png' },
  ],
  vidiotMapKey: '1',
}
