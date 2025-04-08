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
  type: 'accolade',
  key: 'history-in-the-making',
  setTitleId: [2462],
  name: 'History in the Making',
  morality: 'all',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Cimerora.`,
  effect: 'Awards 5 rewards merits.',
  links: [
    { title: 'History in the Making Badge', href: 'https://homecoming.wiki/wiki/History_in_the_Making_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/explore-acc-v.png' },
  ],
  requirements: [
    { key: DepthsOfTime.key, type: 'badge', badgeKey: DepthsOfTime.key },
    { key: BattleHardened.key, type: 'badge', badgeKey: BattleHardened.key },
    { key: Sanctuary.key, type: 'badge', badgeKey: Sanctuary.key },
    { key: VoiceOfTheOracle.key, type: 'badge', badgeKey: VoiceOfTheOracle.key },
    { key: OutOfBounds.key, type: 'badge', badgeKey: OutOfBounds.key },
    { key: HumanNature.key, type: 'badge', badgeKey: HumanNature.key },
    { key: VisionOfAmbition.key, type: 'badge', badgeKey: VisionOfAmbition.key },
    { key: DarknessUnleashed.key, type: 'badge', badgeKey: DarknessUnleashed.key },
  ],
}
