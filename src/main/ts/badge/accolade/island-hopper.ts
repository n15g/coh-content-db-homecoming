import { BadgeData } from 'coh-content-db'
import { Minotaur } from '../exploration/minotaur'
import { NatureLover } from '../exploration/nature-lover'
import { Whitecap } from '../exploration/whitecap'
import { LastLineOfDefense } from '../exploration/last-line-of-defense'
import { TheOldMe } from '../exploration/the-old-me'
import { BridgeHolder } from '../exploration/bridge-holder'
import { OvertimeWorker } from '../exploration/overtime-worker'
import { SpankysCompetitor } from '../exploration/spankys-competitor'

export const IslandHopper: BadgeData = {
  type: 'accolade',
  key: 'island-hopper',
  setTitleId: [1551],
  name: 'Island Hopper',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Talos Island.`,
  links: [
    { title: 'Island Hopper Badge', href: 'https://homecoming.wiki/wiki/Island_Hopper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: Minotaur.key, type: 'badge', badgeKey: Minotaur.key },
    { key: NatureLover.key, type: 'badge', badgeKey: NatureLover.key },
    { key: Whitecap.key, type: 'badge', badgeKey: Whitecap.key },
    { key: LastLineOfDefense.key, type: 'badge', badgeKey: LastLineOfDefense.key },
    { key: TheOldMe.key, type: 'badge', badgeKey: TheOldMe.key },
    { key: BridgeHolder.key, type: 'badge', badgeKey: BridgeHolder.key },
    { key: OvertimeWorker.key, type: 'badge', badgeKey: OvertimeWorker.key },
    { key: SpankysCompetitor.key, type: 'badge', badgeKey: SpankysCompetitor.key },
  ],
}
