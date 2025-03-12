import { BadgeData } from 'coh-content-db'
import { SkywayCity } from '../../map/skyway-city'
import { Purifier } from '../exploration/purifier'
import { Solace } from '../exploration/solace'
import { Dauntless } from '../exploration/dauntless'
import { HealingNode } from '../exploration/healing-node'
import { BetterDays } from '../exploration/better-days'
import { RoomForExpansion } from '../exploration/room-for-expansion'
import { LeftBehind } from '../exploration/left-behind'
import { BridgeToNowhere } from '../exploration/bridge-to-nowhere'

export const SkyGazer: BadgeData = {
  type: 'ACCOLADE',
  key: 'sky-gazer',
  setTitle: { id: 1539 },
  name: [
    { value: 'Sky Gazer' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within Skyway City.` },
  ],
  notes: `Visit all exploration badges in [map:${SkywayCity.key}]`,
  links: [
    { title: 'Sky Gazer Badge', href: 'https://homecoming.wiki/wiki/Sky_Gazer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png' },
  ],
  partials: [
    { key: Purifier.key, type: 'BADGE', badgeKey: Purifier.key },
    { key: Solace.key, type: 'BADGE', badgeKey: Solace.key },
    { key: Dauntless.key, type: 'BADGE', badgeKey: Dauntless.key },
    { key: HealingNode.key, type: 'BADGE', badgeKey: HealingNode.key },
    { key: BetterDays.key, type: 'BADGE', badgeKey: BetterDays.key },
    { key: RoomForExpansion.key, type: 'BADGE', badgeKey: RoomForExpansion.key },
    { key: LeftBehind.key, type: 'BADGE', badgeKey: LeftBehind.key },
    { key: BridgeToNowhere.key, type: 'BADGE', badgeKey: BridgeToNowhere.key },
  ],
}
