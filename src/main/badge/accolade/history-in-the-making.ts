import { BadgeData } from 'coh-content-db'
import { DepthsOfTime } from '../exploration/depths-of-time'
import { BattleHardened } from '../exploration/battle-hardened'
import { Sanctuary } from '../exploration/sanctuary'
import { VoiceOfTheOracle } from '../exploration/voice-of-the-oracle'
import { OutOfBounds } from '../exploration/out-of-bounds'
import { HumanNature } from '../exploration/human-nature'
import { VisionOfAmbition } from '../exploration/vision-of-ambition'
import { DarknessUnleashed } from '../exploration/darkness-unleashed'

export const HistoryInTheMaking: BadgeData = {
  type: 'ACCOLADE',
  key: 'history-in-the-making',
  setTitle: { id: 2462 },
  name: 'History in the Making',
  alignment: ['H', 'V', 'P'],
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Cimerora.`,
  effect: 'Awards 5 rewards merits.',
  links: [
    { title: 'History in the Making Badge', href: 'https://homecoming.wiki/wiki/History_in_the_Making_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png' },
  ],
  requirements: [
    { key: DepthsOfTime.key, type: 'BADGE', badgeKey: DepthsOfTime.key },
    { key: BattleHardened.key, type: 'BADGE', badgeKey: BattleHardened.key },
    { key: Sanctuary.key, type: 'BADGE', badgeKey: Sanctuary.key },
    { key: VoiceOfTheOracle.key, type: 'BADGE', badgeKey: VoiceOfTheOracle.key },
    { key: OutOfBounds.key, type: 'BADGE', badgeKey: OutOfBounds.key },
    { key: HumanNature.key, type: 'BADGE', badgeKey: HumanNature.key },
    { key: VisionOfAmbition.key, type: 'BADGE', badgeKey: VisionOfAmbition.key },
    { key: DarknessUnleashed.key, type: 'BADGE', badgeKey: DarknessUnleashed.key },
  ],
}
