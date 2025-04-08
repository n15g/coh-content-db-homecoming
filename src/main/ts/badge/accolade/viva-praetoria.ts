import { BadgeData } from 'coh-content-db'
import { PurePraetorian } from './pure-praetorian'
import { EmperorForADay } from './emperor-for-a-day'
import { KnowsNovasNooks } from './knows-novas-nooks'
import { BeneathTheEmpire } from './beneath-the-empire'
import { ANeuMan } from './a-neu-man'
import { NeuYouCouldDoIt } from './neu-you-could-do-it'
import { RailRider } from '../exploration/rail-rider'
import { GoingRouge } from '../exploration/going-rouge'

export const VivaPraetoria: BadgeData = {
  type: 'accolade',
  key: 'viva-praetoria',
  setTitleId: [1431],
  name: 'Viva Praetoria',
  morality: 'all',
  badgeText: `Long live Praetoria.  You are a well-traveled citizen.`,
  links: [
    { title: 'Viva Praetoria Badge', href: 'https://homecoming.wiki/wiki/Viva_Praetoria_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/viva-praetoria.png',
  requirements: [
    { key: PurePraetorian.key, type: 'badge', badgeKey: PurePraetorian.key },
    { key: EmperorForADay.key, type: 'badge', badgeKey: EmperorForADay.key },
    { key: KnowsNovasNooks.key, type: 'badge', badgeKey: KnowsNovasNooks.key },
    { key: BeneathTheEmpire.key, type: 'badge', badgeKey: BeneathTheEmpire.key },
    { key: ANeuMan.key, type: 'badge', badgeKey: ANeuMan.key },
    { key: NeuYouCouldDoIt.key, type: 'badge', badgeKey: NeuYouCouldDoIt.key },
    { key: RailRider.key, type: 'badge', badgeKey: RailRider.key },
    { key: GoingRouge.key, type: 'badge', badgeKey: GoingRouge.key },
  ],
}
