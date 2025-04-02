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
  type: 'ACCOLADE',
  key: 'viva-praetoria',
  setTitle: { id: 1431 },
  name: 'Viva Praetoria',
  alignment: ['H', 'V', 'P'],
  badgeText: `Long live Praetoria.  You are a well-traveled citizen.`,
  links: [
    { title: 'Viva Praetoria Badge', href: 'https://homecoming.wiki/wiki/Viva_Praetoria_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/viva-praetoria.png',
  requirements: [
    { key: PurePraetorian.key, type: 'BADGE', badgeKey: PurePraetorian.key },
    { key: EmperorForADay.key, type: 'BADGE', badgeKey: EmperorForADay.key },
    { key: KnowsNovasNooks.key, type: 'BADGE', badgeKey: KnowsNovasNooks.key },
    { key: BeneathTheEmpire.key, type: 'BADGE', badgeKey: BeneathTheEmpire.key },
    { key: ANeuMan.key, type: 'BADGE', badgeKey: ANeuMan.key },
    { key: NeuYouCouldDoIt.key, type: 'BADGE', badgeKey: NeuYouCouldDoIt.key },
    { key: RailRider.key, type: 'BADGE', badgeKey: RailRider.key },
    { key: GoingRouge.key, type: 'BADGE', badgeKey: GoingRouge.key },
  ],
}
