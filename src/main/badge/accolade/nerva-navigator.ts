import { BadgeData, mapLink } from 'coh-content-db'
import { NervaArchipelago } from '../../map/nerva-archipelago'
import { WatcherOnTheKnoll } from '../exploration/watcher-on-the-knoll'
import { LockedAndLoaded } from '../exploration/locked-and-loaded'
import { NervaWreck } from '../exploration/nerva-wreck'
import { PrimalInstinct } from '../exploration/primal-instinct'
import { TreeHugger } from '../exploration/tree-hugger'
import { UnethicalTourist } from '../exploration/unethical-tourist'
import { BlindEye } from '../exploration/blind-eye'
import { Soother } from '../exploration/soother'

export const NervaNavigator: BadgeData = {
  type: 'ACCOLADE',
  key: 'nerva-navigator',
  setTitle: { id: 1504 },
  name: [
    { value: 'Nerva Navigator' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Nerva Archipelago.` },
  ],
  notes: `Visit all exploration badges in ${mapLink(NervaArchipelago)}`,
  links: [
    { title: 'Nerva Navigator Badge', href: 'https://homecoming.wiki/wiki/Nerva_Navigator_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png' },
  ],
  requirements: [[
    { key: WatcherOnTheKnoll.key, type: 'BADGE', badgeKey: WatcherOnTheKnoll.key },
    { key: LockedAndLoaded.key, type: 'BADGE', badgeKey: LockedAndLoaded.key },
    { key: NervaWreck.key, type: 'BADGE', badgeKey: NervaWreck.key },
    { key: PrimalInstinct.key, type: 'BADGE', badgeKey: PrimalInstinct.key },
    { key: TreeHugger.key, type: 'BADGE', badgeKey: TreeHugger.key },
    { key: UnethicalTourist.key, type: 'BADGE', badgeKey: UnethicalTourist.key },
    { key: BlindEye.key, type: 'BADGE', badgeKey: BlindEye.key },
    { key: Soother.key, type: 'BADGE', badgeKey: Soother.key },
  ]],
}
