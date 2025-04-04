import { BadgeData, zoneLink } from 'coh-content-db'
import { CreysFolly } from '../../zone/creys-folly'
import { BurningTheMidnightOil } from '../exploration/burning-the-midnight-oil'
import { CreyCares } from '../exploration/crey-cares'
import { CreyWatcher } from '../exploration/crey-watcher'
import { EyesOfNemesis } from '../exploration/eyes-of-nemesis'
import { FreaksFolly } from '../exploration/freaks-folly'
import { HammerOfTheRikti } from '../exploration/hammer-of-the-rikti'
import { VeniVidiVici } from '../exploration/veni-vidi-vici'
import { CirqueDuFreak } from '../exploration/cirque-du-freak'

export const CrazyForCreysFolly: BadgeData = {
  type: 'ACCOLADE',
  key: 'crazy-for-creys-folly',
  setTitle: { id: 1880 },
  name: [
    { value: 'Crazy for Crey\'s Folly' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Crey's Folly.` },
  ],
  notes: `Visit all exploration badges in ${zoneLink(CreysFolly)}`,
  links: [
    { title: 'Crazy for Crey\'s Folly Badge', href: 'https://homecoming.wiki/wiki/Crazy_for_Crey%27s_Folly_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png' },
  ],
  requirements: [[
    { key: BurningTheMidnightOil.key, type: 'BADGE', badgeKey: BurningTheMidnightOil.key },
    { key: CirqueDuFreak.key, type: 'BADGE', badgeKey: CirqueDuFreak.key },
    { key: CreyCares.key, type: 'BADGE', badgeKey: CreyCares.key },
    { key: CreyWatcher.key, type: 'BADGE', badgeKey: CreyWatcher.key },
    { key: EyesOfNemesis.key, type: 'BADGE', badgeKey: EyesOfNemesis.key },
    { key: FreaksFolly.key, type: 'BADGE', badgeKey: FreaksFolly.key },
    { key: HammerOfTheRikti.key, type: 'BADGE', badgeKey: HammerOfTheRikti.key },
    { key: VeniVidiVici.key, type: 'BADGE', badgeKey: VeniVidiVici.key },
  ]],
}
