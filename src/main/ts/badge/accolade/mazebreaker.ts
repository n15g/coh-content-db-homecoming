import { BadgeData } from 'coh-content-db'
import { TestedByCombat } from '../accomplishment/tested-by-combat'
import { ChromaticCombatant } from '../accomplishment/chromatic-combatant'

export const Mazebreaker: BadgeData = {
  type: 'accolade',
  key: 'mazebreaker',
  setTitleId: [2582],
  name: 'Mazebreaker',
  releaseDate: '2025-11-25',
  morality: 'all',
  badgeText: `You've become much more adept at fighting in the Labyrinth of Fog after undergoing the full spectrum of Tests of Combat offered by the Four Generals of Achlys. No matter what comes next for the dream-like maze, you'll be ready.`,
  effect: `Awards the Mazebreaker power.`,
  links: [
    { title: 'Mazebreaker Badge', href: 'https://homecoming.wiki/wiki/Mazebreaker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/mazebreaker-realities.png',
  requirements: [
    { key: TestedByCombat.key, type: 'badge', badgeKey: TestedByCombat.key },
    { key: ChromaticCombatant.key, type: 'badge', badgeKey: ChromaticCombatant.key },
  ],

}
