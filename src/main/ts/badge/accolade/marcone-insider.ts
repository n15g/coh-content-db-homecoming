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
  type: 'accolade',
  key: 'marcone-insider',
  setTitleId: [1491],
  name: 'Marcone Insider',
  morality: 'villainous',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Port Oakes.`,
  links: [
    { title: 'Marcone Insider Badge', href: 'https://homecoming.wiki/wiki/Marcone_Insider_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png',
  requirements: [
    { key: ScurvyDog.key, type: 'badge', badgeKey: ScurvyDog.key },
    { key: WashedUp.key, type: 'badge', badgeKey: WashedUp.key },
    { key: PowderMonkey.key, type: 'badge', badgeKey: PowderMonkey.key },
    { key: Driller.key, type: 'badge', badgeKey: Driller.key },
    { key: LongWalk.key, type: 'badge', badgeKey: LongWalk.key },
    { key: BigSpider.key, type: 'badge', badgeKey: BigSpider.key },
    { key: CommutersWoe.key, type: 'badge', badgeKey: CommutersWoe.key },
    { key: HiddenGetaway.key, type: 'badge', badgeKey: HiddenGetaway.key },
  ],
}
