import { BadgeData } from 'coh-content-db'
import { TalosIsland } from '../../map/talos-island'
import { Minotaur } from '../exploration/minotaur'
import { NatureLover } from '../exploration/nature-lover'
import { Whitecap } from '../exploration/whitecap'
import { LastLineOfDefense } from '../exploration/last-line-of-defense'
import { TheOldMe } from '../exploration/the-old-me'
import { BridgeHolder } from '../exploration/bridge-holder'
import { OvertimeWorker } from '../exploration/overtime-worker'
import { SpankysCompetitor } from '../exploration/spankys-competitor'

export const IslandHopper: BadgeData = {
  type: 'ACCOLADE',
  key: 'island-hopper',
  setTitle: { id: 1551 },
  name: [
    { value: 'Island Hopper' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Talos Island.` },
  ],
  notes: `Visit all exploration badges in [map:${TalosIsland.key}]`,
  links: [
    { title: 'Island Hopper Badge', href: 'https://homecoming.wiki/wiki/Island_Hopper_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png' },
  ],
  partials: [
    { key: Minotaur.key, type: 'BADGE', badgeKey: Minotaur.key },
    { key: NatureLover.key, type: 'BADGE', badgeKey: NatureLover.key },
    { key: Whitecap.key, type: 'BADGE', badgeKey: Whitecap.key },
    { key: LastLineOfDefense.key, type: 'BADGE', badgeKey: LastLineOfDefense.key },
    { key: TheOldMe.key, type: 'BADGE', badgeKey: TheOldMe.key },
    { key: BridgeHolder.key, type: 'BADGE', badgeKey: BridgeHolder.key },
    { key: OvertimeWorker.key, type: 'BADGE', badgeKey: OvertimeWorker.key },
    { key: SpankysCompetitor.key, type: 'BADGE', badgeKey: SpankysCompetitor.key },
  ],
}
