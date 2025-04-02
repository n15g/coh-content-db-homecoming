import { BadgeData } from 'coh-content-db'
import { GreekPhilosopher } from '../history/greek-philosopher'
import { HiddenInTheFog } from '../exploration/hidden-in-the-fog'
import { MalevolentIntoxication } from '../defeat/malevolent-intoxication'
import { SlayerOfTheMinotaur } from '../defeat/slayer-of-the-minotaur'

export const ConquerorOfTheLabyrinth: BadgeData = {
  type: 'ACCOLADE',
  key: 'conqueror-of-the-labyrinth',
  setTitle: { id: 2532 },
  name: [
    { value: 'Conqueror of the Labyrinth' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: `You have proven your prowess by having not only explored, but also conquered everything that stood in your path within the maze of corridors known as the Labyrinth of Fog.` },
  ],
  effect: `Awards the Core Attunement power.`,
  links: [
    { title: 'Conqueror of the Labyrinth Badge', href: 'https://homecoming.wiki/wiki/Conqueror_of_the_Labyrinth_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/conqueror-of-the-labyrinth.png' },
  ],
  requirements: [
    { key: GreekPhilosopher.key, type: 'BADGE', badgeKey: GreekPhilosopher.key },
    { key: HiddenInTheFog.key, type: 'BADGE', badgeKey: HiddenInTheFog.key },
    { key: MalevolentIntoxication.key, type: 'BADGE', badgeKey: MalevolentIntoxication.key },
    { key: SlayerOfTheMinotaur.key, type: 'BADGE', badgeKey: SlayerOfTheMinotaur.key },
  ],
}
