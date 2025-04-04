import { BadgeData } from 'coh-content-db'
import { BurningTheMidnightOil } from '../exploration/burning-the-midnight-oil'
import { CreyCares } from '../exploration/crey-cares'
import { CreyWatcher } from '../exploration/crey-watcher'
import { EyesOfNemesis } from '../exploration/eyes-of-nemesis'
import { FreaksFolly } from '../exploration/freaks-folly'
import { HammerOfTheRikti } from '../exploration/hammer-of-the-rikti'
import { VeniVidiVici } from '../exploration/veni-vidi-vici'
import { CirqueDuFreak } from '../exploration/cirque-du-freak'

export const CrazyForCreysFolly: BadgeData = {
  type: 'accolade',
  key: 'crazy-for-creys-folly',
  setTitleId: [1880],
  name: `Crazy for Crey's Folly`,
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Crey's Folly.`,
  links: [
    { title: `Crazy for Crey's Folly Badge`, href: 'https://homecoming.wiki/wiki/Crazy_for_Crey%27s_Folly_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: BurningTheMidnightOil.key, type: 'badge', badgeKey: BurningTheMidnightOil.key },
    { key: CirqueDuFreak.key, type: 'badge', badgeKey: CirqueDuFreak.key },
    { key: CreyCares.key, type: 'badge', badgeKey: CreyCares.key },
    { key: CreyWatcher.key, type: 'badge', badgeKey: CreyWatcher.key },
    { key: EyesOfNemesis.key, type: 'badge', badgeKey: EyesOfNemesis.key },
    { key: FreaksFolly.key, type: 'badge', badgeKey: FreaksFolly.key },
    { key: HammerOfTheRikti.key, type: 'badge', badgeKey: HammerOfTheRikti.key },
    { key: VeniVidiVici.key, type: 'badge', badgeKey: VeniVidiVici.key },
  ],
}
