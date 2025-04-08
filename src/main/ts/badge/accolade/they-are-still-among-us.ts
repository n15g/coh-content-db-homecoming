import { BadgeData } from 'coh-content-db'
import { VanguardOperative } from '../exploration/vanguard-operative'
import { Trespasser } from '../exploration/trespasser'
import { Lifesaver } from '../exploration/lifesaver'
import { BaseJumper } from '../exploration/base-jumper'
import { Homewrecker } from '../exploration/homewrecker'
import { Luscious } from '../exploration/luscious'
import { JunkyardDog } from '../exploration/junkyard-dog'
import { Unabashed } from '../exploration/unabashed'

export const TheyAreStillAmongUs: BadgeData = {
  type: 'accolade',
  key: 'they-are-still-among-us',
  setTitleId: [2331],
  name: 'They Are Still Among Us',
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge in the Rikti War Zone.`,
  links: [
    { title: 'They Are Still Among Us Badge', href: 'https://homecoming.wiki/wiki/They_Are_Still_Among_Us_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: VanguardOperative.key, type: 'badge', badgeKey: VanguardOperative.key },
    { key: Trespasser.key, type: 'badge', badgeKey: Trespasser.key },
    { key: Lifesaver.key, type: 'badge', badgeKey: Lifesaver.key },
    { key: BaseJumper.key, type: 'badge', badgeKey: BaseJumper.key },
    { key: Homewrecker.key, type: 'badge', badgeKey: Homewrecker.key },
    { key: Luscious.key, type: 'badge', badgeKey: Luscious.key },
    { key: JunkyardDog.key, type: 'badge', badgeKey: JunkyardDog.key },
    { key: Unabashed.key, type: 'badge', badgeKey: Unabashed.key },
  ],
}
