import { BadgeData } from 'coh-content-db'
import { ScurvyDog } from '../exploration/scurvy-dog'
import { WashedUp } from '../exploration/washed-up'
import { PowderMonkey } from '../exploration/powder-monkey'
import { Driller } from '../exploration/driller'
import { LongWalk } from '../exploration/long-walk'
import { BigSpider } from '../exploration/big-spider'
import { CommutersWoe } from '../exploration/commuters-woe'
import { HiddenGetaway } from '../exploration/hidden-getaway'

export const MarconeInsider: BadgeData = {
  type: 'ACCOLADE',
  key: 'marcone-insider',
  setTitle: { id: 1491 },
  name: [
    { value: 'Marcone Insider' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Port Oakes.` },
  ],
  links: [
    { title: 'Marcone Insider Badge', href: 'https://homecoming.wiki/wiki/Marcone_Insider_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png' },
  ],
  requirements: [
    { key: ScurvyDog.key, type: 'BADGE', badgeKey: ScurvyDog.key },
    { key: WashedUp.key, type: 'BADGE', badgeKey: WashedUp.key },
    { key: PowderMonkey.key, type: 'BADGE', badgeKey: PowderMonkey.key },
    { key: Driller.key, type: 'BADGE', badgeKey: Driller.key },
    { key: LongWalk.key, type: 'BADGE', badgeKey: LongWalk.key },
    { key: BigSpider.key, type: 'BADGE', badgeKey: BigSpider.key },
    { key: CommutersWoe.key, type: 'BADGE', badgeKey: CommutersWoe.key },
    { key: HiddenGetaway.key, type: 'BADGE', badgeKey: HiddenGetaway.key },
  ],
}
