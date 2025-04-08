import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { SirBedwyr } from '../../contact/sir-bedwyr'

export const TheOnceAndFutureKing: BadgeData = {
  type: 'accomplishment',
  key: 'the-once-and-future-king',
  setTitleId: [2219],
  name: [
    { sex: 'M', value: 'The Once and Future King' },
    { sex: 'F', value: 'The Once and Future Queen' },
  ],
  morality: 'all',
  badgeText: 'You helped set Pendragon down the path of righteousness. While he may walk the mists of Praetoria for years, his soul has been redeemed and his freedom from Night Ward ensured.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero or villain can select the "A Matter of Honor" entry with number 23.04 in the 35-39 level range.`,
  links: [
    { title: 'The Once and Future King Badge', href: 'https://homecoming.wiki/wiki/The_Once_and_Future_King_Badge' },
    { title: 'The Once and Future Queen Badge', href: 'https://homecoming.wiki/wiki/The_Once_and_Future_Queen_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/the-once-and-future-king.png',
  requirements: [
    { key: 'amoh', type: 'ARC', missionName: 'A Matter of Honor', contactKey: SirBedwyr.key },
  ],
}
