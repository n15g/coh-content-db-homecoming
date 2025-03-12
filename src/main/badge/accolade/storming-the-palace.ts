import { BadgeData } from 'coh-content-db'
import { TheStormPalace } from '../../map/the-storm-palace'
import { AcolyteOfAnger } from '../exploration/acolyte-of-anger'
import { CourtingMadness } from '../exploration/courting-madness'
import { EveOfDestruction } from '../exploration/eve-of-destruction'
import { FistOfFury } from '../exploration/fist-of-fury'
import { HateMachine } from '../exploration/hate-machine'
import { LordOfStorms } from '../exploration/lord-of-storms'
import { MaliceAforethought } from '../exploration/malice-aforethought'
import { Tormented } from '../exploration/tormented'

export const StormingThePalace: BadgeData = {
  type: 'ACCOLADE',
  key: 'storming-the-palace',
  setTitle: { id: 1889 },
  name: [
    { value: 'Storming the Palace' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `You've obtained this Accolade by earning every Exploration badge within the Storm Palace.` },
  ],
  notes: `Visit all exploration badges in [map:${TheStormPalace.key}]`,
  links: [
    { title: 'Storming the Palace Badge', href: 'https://homecoming.wiki/wiki/Storming_the_Palace_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png' },
  ],
  partials: [
    { key: AcolyteOfAnger.key, type: 'BADGE', badgeKey: AcolyteOfAnger.key },
    { key: CourtingMadness.key, type: 'BADGE', badgeKey: CourtingMadness.key },
    { key: EveOfDestruction.key, type: 'BADGE', badgeKey: EveOfDestruction.key },
    { key: FistOfFury.key, type: 'BADGE', badgeKey: FistOfFury.key },
    { key: HateMachine.key, type: 'BADGE', badgeKey: HateMachine.key },
    { key: LordOfStorms.key, type: 'BADGE', badgeKey: LordOfStorms.key },
    { key: MaliceAforethought.key, type: 'BADGE', badgeKey: MaliceAforethought.key },
    { key: Tormented.key, type: 'BADGE', badgeKey: Tormented.key },
  ],
}
