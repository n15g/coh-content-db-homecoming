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
  type: 'ACCOLADE',
  key: 'cascade-cleansing',
  setTitle: { id: 1882 },
  name: 'Cascade Cleansing',
  alignment: ['H'],
  badgeText: `You've obtained this Accolade by earning every Exploration badge within Cascade Archipelago.`,
  links: [
    { title: 'Cascade Cleansing Badge', href: 'https://homecoming.wiki/wiki/Cascade_Cleansing_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: BeingAndNothingness.key, type: 'BADGE', badgeKey: BeingAndNothingness.key },
    { key: Castaway.key, type: 'BADGE', badgeKey: Castaway.key },
    { key: HearingVoices.key, type: 'BADGE', badgeKey: HearingVoices.key },
    { key: LiquidMemory.key, type: 'BADGE', badgeKey: LiquidMemory.key },
    { key: NoTurningBackNow.key, type: 'BADGE', badgeKey: NoTurningBackNow.key },
    { key: PeaceWalker.key, type: 'BADGE', badgeKey: PeaceWalker.key },
    { key: TheHeartOfMemory.key, type: 'BADGE', badgeKey: TheHeartOfMemory.key },
    { key: UsurperOfWorlds.key, type: 'BADGE', badgeKey: UsurperOfWorlds.key },
  ],
}
