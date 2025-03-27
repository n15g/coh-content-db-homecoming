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
  type: 'ACCOLADE',
  key: 'chronomaster',
  setTitle: { id: 946 },
  name: [
    { value: 'Chronomaster' },
  ],
  alignment: ['H', 'V', 'P'],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/chronomaster.png' }],
  badgeText: [
    { value: `You are a proven master of Time Travel.` },
  ],
  links: [
    { title: 'Chronomaster Badge', href: 'https://homecoming.wiki/wiki/Chronomaster_Badge' },
  ],
  partials: [
    { key: OuroborosMender.key, type: 'BADGE', badgeKey: OuroborosMender.key },
    { key: PraetorianTourist.key, type: 'BADGE', badgeKey: PraetorianTourist.key },
    { key: Demarcated.key, type: 'BADGE', badgeKey: Demarcated.key },
    { key: Intrepid.key, type: 'BADGE', badgeKey: Intrepid.key },
    { key: Marginalized.key, type: 'BADGE', badgeKey: Marginalized.key },
    { key: Suspended.key, type: 'BADGE', badgeKey: Suspended.key },
    { key: Temerarious.key, type: 'BADGE', badgeKey: Temerarious.key },
    { key: Undertaker.key, type: 'BADGE', badgeKey: Undertaker.key },
    { key: Unenhanced.key, type: 'BADGE', badgeKey: Unenhanced.key },
    { key: Uninspired.key, type: 'BADGE', badgeKey: Uninspired.key },
    { key: GoldMedalist.key, type: 'BADGE', badgeKey: GoldMedalist.key },
    { key: AllForOneOneForAll.key, type: 'BADGE', badgeKey: AllForOneOneForAll.key },
  ],
}
