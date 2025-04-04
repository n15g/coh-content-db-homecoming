import { BadgeData } from 'coh-content-db'
import { SAFEGUARD_MAYHEM_CONTACT_FRAGMENT } from '../fragment'
import { SafeguardKingsRow } from '../../zone/safeguard-kings-row'

export const KingsRighteousness: BadgeData = {
  type: 'exploration',
  key: 'kings-righteousness',
  setTitleId: [649],
  name: [
    { alignment: 'hero', value: `King's Righteousness` },
    { alignment: 'villain', value: `King's Capriciousness` },
  ],
  morality: 'heroic',
  zoneKey: SafeguardKingsRow.key,
  badgeText: 'The Clockwork Paladin, a menace to the city, was once spotted running around in this area.',
  loc: [670, -42, -2350],
  notes: `Located between two large crates, just north of the prominent building in the southwestern part of the zone. The spot is approximately 171 yards northeast of the zone’s southwestern corner.

${SAFEGUARD_MAYHEM_CONTACT_FRAGMENT}`,
  links: [
    { title: `King's Righteousness Badge`, href: 'https://homecoming.wiki/wiki/King%27s_Righteousness_Badge' },
    { title: `King's Capriciousness Badge`, href: 'https://homecoming.wiki/wiki/King%27s_Capriciousness_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/hero.png',
  vidiotMapKey: '1',
}
