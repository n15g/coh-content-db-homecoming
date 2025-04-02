import { BadgeData } from 'coh-content-db'
import { Summoned } from '../exploration/summoned'
import { Upgraded } from '../exploration/upgraded'
import { MysticKing } from '../exploration/mystic-king'
import { KeenSighted } from '../exploration/keen-sighted'
import { Smokey } from '../exploration/smokey'
import { Pwned } from '../exploration/pwned'
import { WentworthHistoryBuff } from '../exploration/wentworth-history-buff'
import { ManOfVengeance } from '../exploration/man-of-vengeance'

export const PPDInformant: BadgeData = {
  type: 'ACCOLADE',
  key: 'ppd-informant',
  setTitle: { id: 1529 },
  name: [
    { alignment: 'H', value: 'PPD Informant' },
    { alignment: 'V', value: 'Former PPD Stoolie' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Kings Row.` },
  ],
  links: [
    { title: 'PPD Informant Badge', href: 'https://homecoming.wiki/wiki/PPD_Informant_Badge' },
    { title: 'Former PPD Stoolie Badge', href: 'https://homecoming.wiki/wiki/Former_PPD_Stoolie_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png' },
  ],
  requirements: [
    { key: Summoned.key, type: 'BADGE', badgeKey: Summoned.key },
    { key: Upgraded.key, type: 'BADGE', badgeKey: Upgraded.key },
    { key: MysticKing.key, type: 'BADGE', badgeKey: MysticKing.key },
    { key: KeenSighted.key, type: 'BADGE', badgeKey: KeenSighted.key },
    { key: Smokey.key, type: 'BADGE', badgeKey: Smokey.key },
    { key: WentworthHistoryBuff.key, type: 'BADGE', badgeKey: WentworthHistoryBuff.key },
    { key: Pwned.key, type: 'BADGE', badgeKey: Pwned.key },
    { key: ManOfVengeance.key, type: 'BADGE', badgeKey: ManOfVengeance.key },
  ],
}
