import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { SafeguardKingsRow } from '../../zone/safeguard-kings-row'

export const KingsRighteousness: BadgeData = {
  type: 'EXPLORATION',
  key: 'kings-righteousness',
  setTitle: { id: 649 },
  name: [
    { alignment: 'H', value: 'King\'s Righteousness' },
    { alignment: 'V', value: 'King\'s Capriciousness' },
  ],
  alignment: ['H'],
  zoneKey: SafeguardKingsRow.key,
  badgeText: [{ value: 'The Clockwork Paladin, a menace to the city, was once spotted running around in this area.' }],
  loc: [670, -42, -2350],
  notes: 'The King\'s Righteousness Badge is located in the Kings Row Safeguard Mission.\n'
    + '\n'
    + 'It is located between two large crates just north of the large building in the southwestern area of the zone, 171 yards north-east of the south-western corner of the zone.\n'
    + '\n'
    + SAFEGUARD_MAYHEM_CONTACT_FRAGMENT,
  links: [
    { title: 'King\'s Righteousness Badge', href: 'https://homecoming.wiki/wiki/King%27s_Righteousness_Badge' },
    { title: 'King\'s Capriciousness Badge', href: 'https://homecoming.wiki/wiki/King%27s_Capriciousness_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },

  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png' },
  ],
  vidiotMapKey: '1',
}
