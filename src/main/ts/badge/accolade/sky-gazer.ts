import { BadgeData } from 'coh-content-db'
import { Purifier } from '../exploration/purifier'
import { Solace } from '../exploration/solace'
import { Dauntless } from '../exploration/dauntless'
import { HealingNode } from '../exploration/healing-node'
import { BetterDays } from '../exploration/better-days'
import { RoomForExpansion } from '../exploration/room-for-expansion'
import { LeftBehind } from '../exploration/left-behind'
import { BridgeToNowhere } from '../exploration/bridge-to-nowhere'

export const SkyGazer: BadgeData = {
  type: 'accolade',
  key: 'sky-gazer',
  setTitleId: [1539],
  name: 'Sky Gazer',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Skyway City.`,
  links: [
    { title: 'Sky Gazer Badge', href: 'https://homecoming.wiki/wiki/Sky_Gazer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png',
  requirements: [
    { key: Purifier.key, type: 'badge', badgeKey: Purifier.key },
    { key: Solace.key, type: 'badge', badgeKey: Solace.key },
    { key: Dauntless.key, type: 'badge', badgeKey: Dauntless.key },
    { key: HealingNode.key, type: 'badge', badgeKey: HealingNode.key },
    { key: BetterDays.key, type: 'badge', badgeKey: BetterDays.key },
    { key: RoomForExpansion.key, type: 'badge', badgeKey: RoomForExpansion.key },
    { key: LeftBehind.key, type: 'badge', badgeKey: LeftBehind.key },
    { key: BridgeToNowhere.key, type: 'badge', badgeKey: BridgeToNowhere.key },
  ],
}
