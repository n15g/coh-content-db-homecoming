import { BadgeData } from 'coh-content-db'
import { BeingAndNothingness } from '../exploration/being-and-nothingness'
import { Castaway } from '../exploration/castaway'
import { HearingVoices } from '../exploration/hearing-voices'
import { LiquidMemory } from '../exploration/liquid-memory'
import { NoTurningBackNow } from '../exploration/no-turning-back-now'
import { PeaceWalker } from '../exploration/peace-walker'
import { TheHeartOfMemory } from '../exploration/the-heart-of-memory'
import { UsurperOfWorlds } from '../exploration/usurper-of-worlds'

export const CascadeCleansing: BadgeData = {
  type: 'accolade',
  key: 'cascade-cleansing',
  setTitleId: [1882],
  name: 'Cascade Cleansing',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Cascade Archipelago.`,
  links: [
    { title: 'Cascade Cleansing Badge', href: 'https://homecoming.wiki/wiki/Cascade_Cleansing_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: BeingAndNothingness.key, type: 'badge', badgeKey: BeingAndNothingness.key },
    { key: Castaway.key, type: 'badge', badgeKey: Castaway.key },
    { key: HearingVoices.key, type: 'badge', badgeKey: HearingVoices.key },
    { key: LiquidMemory.key, type: 'badge', badgeKey: LiquidMemory.key },
    { key: NoTurningBackNow.key, type: 'badge', badgeKey: NoTurningBackNow.key },
    { key: PeaceWalker.key, type: 'badge', badgeKey: PeaceWalker.key },
    { key: TheHeartOfMemory.key, type: 'badge', badgeKey: TheHeartOfMemory.key },
    { key: UsurperOfWorlds.key, type: 'badge', badgeKey: UsurperOfWorlds.key },
  ],
}
