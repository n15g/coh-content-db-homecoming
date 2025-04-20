import { BadgeData } from 'coh-content-db'
import { WatcherOnTheKnoll } from '../exploration/watcher-on-the-knoll'
import { LockedAndLoaded } from '../exploration/locked-and-loaded'
import { NervaWreck } from '../exploration/nerva-wreck'
import { PrimalInstinct } from '../exploration/primal-instinct'
import { TreeHugger } from '../exploration/tree-hugger'
import { UnethicalTourist } from '../exploration/unethical-tourist'
import { BlindEye } from '../exploration/blind-eye'
import { Soother } from '../exploration/soother'

export const NervaNavigator: BadgeData = {
  type: 'accolade',
  key: 'nerva-navigator',
  setTitleId: [1504],
  name: 'Nerva Navigator',
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Nerva Archipelago.`,
  links: [
    { title: 'Nerva Navigator Badge', href: 'https://homecoming.wiki/wiki/Nerva_Navigator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png',
  requirements: [
    { key: WatcherOnTheKnoll.key, type: 'badge', badgeKey: WatcherOnTheKnoll.key },
    { key: LockedAndLoaded.key, type: 'badge', badgeKey: LockedAndLoaded.key },
    { key: NervaWreck.key, type: 'badge', badgeKey: NervaWreck.key },
    { key: PrimalInstinct.key, type: 'badge', badgeKey: PrimalInstinct.key },
    { key: TreeHugger.key, type: 'badge', badgeKey: TreeHugger.key },
    { key: UnethicalTourist.key, type: 'badge', badgeKey: UnethicalTourist.key },
    { key: BlindEye.key, type: 'badge', badgeKey: BlindEye.key },
    { key: Soother.key, type: 'badge', badgeKey: Soother.key },
  ],
}
