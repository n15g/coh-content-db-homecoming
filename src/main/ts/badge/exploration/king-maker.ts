import { BadgeData, contactLink } from 'coh-content-db'
import { MayhemKingsRow } from '../../zone/mayhem-kings-row'
import { LordSchweinzer } from '../../contact/lord-schweinzer'

export const KingMaker: BadgeData = {
  type: 'exploration',
  key: 'king-maker',
  setTitleId: [556],
  name: 'King Maker',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `This is the spot in Kings Row of a famous bloodbath where the Marcone made a vicious power play against the Verandi.`,
  notes: `Located approximately 113 yards northeast of the Bank.

Out-levelled Mayhem missions can be accessed via ${contactLink(LordSchweinzer)}.`,
  links: [
    { title: 'King Maker Badge', href: 'https://homecoming.wiki/wiki/King_Maker_Badge' },
    { title: 'I25 Safeguard/Mayhem Contact', href: 'https://forums.homecomingservers.com/topic/1176-safeguardmayhem-badges' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/villain.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: MayhemKingsRow.key, coords: [-252, -42, -2515], icon: 'badge', iconText: '1' } },
  ],
}
