import { BadgeData } from 'coh-content-db'
import { OuroborosMender } from '../ouroboros/ouroboros-mender'
import { PraetorianTourist } from '../ouroboros/praetorian-tourist'
import { Demarcated } from '../ouroboros/demarcated'
import { Intrepid } from '../ouroboros/intrepid'
import { Marginalized } from '../ouroboros/marginalized'
import { Suspended } from '../ouroboros/suspended'
import { Temerarious } from '../ouroboros/temerarious'
import { Undertaker } from '../ouroboros/undertaker'
import { Unenhanced } from '../ouroboros/unenhanced'
import { Uninspired } from '../ouroboros/uninspired'
import { GoldMedalist } from '../ouroboros/gold-medalist'
import { AllForOneOneForAll } from '../ouroboros/all-for-one-one-for-all'

export const Chronomaster: BadgeData = {
  type: 'accolade',
  key: 'chronomaster',
  setTitleId: [946],
  name: 'Chronomaster',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You are a proven master of Time Travel.`,
  links: [
    { title: 'Chronomaster Badge', href: 'https://homecoming.wiki/wiki/Chronomaster_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/chronomaster.png',
  requirements: [
    { key: OuroborosMender.key, type: 'badge', badgeKey: OuroborosMender.key },
    { key: PraetorianTourist.key, type: 'badge', badgeKey: PraetorianTourist.key },
    { key: Demarcated.key, type: 'badge', badgeKey: Demarcated.key },
    { key: Intrepid.key, type: 'badge', badgeKey: Intrepid.key },
    { key: Marginalized.key, type: 'badge', badgeKey: Marginalized.key },
    { key: Suspended.key, type: 'badge', badgeKey: Suspended.key },
    { key: Temerarious.key, type: 'badge', badgeKey: Temerarious.key },
    { key: Undertaker.key, type: 'badge', badgeKey: Undertaker.key },
    { key: Unenhanced.key, type: 'badge', badgeKey: Unenhanced.key },
    { key: Uninspired.key, type: 'badge', badgeKey: Uninspired.key },
    { key: GoldMedalist.key, type: 'badge', badgeKey: GoldMedalist.key },
    { key: AllForOneOneForAll.key, type: 'badge', badgeKey: AllForOneOneForAll.key },
  ],
}
