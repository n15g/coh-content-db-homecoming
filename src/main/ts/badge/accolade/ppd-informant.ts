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
  type: 'accolade',
  key: 'ppd-informant',
  setTitleId: [1529],
  name: [
    { alignment: 'hero', value: 'PPD Informant' },
    { alignment: 'villain', value: 'Former PPD Stoolie' },
  ],
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Kings Row.`,
  links: [
    { title: 'PPD Informant Badge', href: 'https://homecoming.wiki/wiki/PPD_Informant_Badge' },
    { title: 'Former PPD Stoolie Badge', href: 'https://homecoming.wiki/wiki/Former_PPD_Stoolie_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: Summoned.key, type: 'badge', badgeKey: Summoned.key },
    { key: Upgraded.key, type: 'badge', badgeKey: Upgraded.key },
    { key: MysticKing.key, type: 'badge', badgeKey: MysticKing.key },
    { key: KeenSighted.key, type: 'badge', badgeKey: KeenSighted.key },
    { key: Smokey.key, type: 'badge', badgeKey: Smokey.key },
    { key: WentworthHistoryBuff.key, type: 'badge', badgeKey: WentworthHistoryBuff.key },
    { key: Pwned.key, type: 'badge', badgeKey: Pwned.key },
    { key: ManOfVengeance.key, type: 'badge', badgeKey: ManOfVengeance.key },
  ],
}
