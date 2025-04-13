import { BadgeData } from 'coh-content-db'
import { AcolyteOfAnger } from '../exploration/acolyte-of-anger'
import { CourtingMadness } from '../exploration/courting-madness'
import { EveOfDestruction } from '../exploration/eve-of-destruction'
import { FistOfFury } from '../exploration/fist-of-fury'
import { HateMachine } from '../exploration/hate-machine'
import { LordOfStorms } from '../exploration/lord-of-storms'
import { MaliceAforethought } from '../exploration/malice-aforethought'
import { Tormented } from '../exploration/tormented'

export const StormingThePalace: BadgeData = {
  type: 'accolade',
  key: 'storming-the-palace',
  setTitleId: [1889],
  name: 'Storming the Palace',
  morality: 'heroic',
  badgeText: `You've obtained this Accolade by earning every Exploration badge within the Storm Palace.`,
  links: [
    { title: 'Storming the Palace Badge', href: 'https://homecoming.wiki/wiki/Storming_the_Palace_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/hazard-acc.png',
  requirements: [
    { key: AcolyteOfAnger.key, type: 'badge', badgeKey: AcolyteOfAnger.key },
    { key: CourtingMadness.key, type: 'badge', badgeKey: CourtingMadness.key },
    { key: EveOfDestruction.key, type: 'badge', badgeKey: EveOfDestruction.key },
    { key: FistOfFury.key, type: 'badge', badgeKey: FistOfFury.key },
    { key: HateMachine.key, type: 'badge', badgeKey: HateMachine.key },
    { key: LordOfStorms.key, type: 'badge', badgeKey: LordOfStorms.key },
    { key: MaliceAforethought.key, type: 'badge', badgeKey: MaliceAforethought.key },
    { key: Tormented.key, type: 'badge', badgeKey: Tormented.key },
  ],
}
