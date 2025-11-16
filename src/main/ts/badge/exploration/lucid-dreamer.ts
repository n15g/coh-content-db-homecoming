import { BadgeData } from 'coh-content-db'
import { TheLabyrinthOfFog } from '../../zone/the-labyrinth-of-fog'

export const LucidDreamer: BadgeData = {
  type: 'exploration',
  key: 'lucid-dreamer',
  setTitleId: [2573],
  name: 'Lucid Dreamer',
  releaseDate: '2025-11-30',
  morality: 'all',
  badgeText: `You've gone much deeper into the Labyrinth of Fog, perhaps deeper than you ought to... Lurking in the darkest depths of the maze hid a shadow of Atlas Park, wreathed in nightmare. What purpose this place serves is a mystery waiting to be uncovered.`,
  notes: ` `,
  links: [
    { title: 'Lucid Dreamer Badge', href: 'https://homecoming.wiki/wiki/Lucid_Dreamer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/exploration/labyrinth.png',
  requirements: [
    { key: 'loc-0', type: 'location', location: { zoneKey: TheLabyrinthOfFog.key, coords: [7146, -802.5, 68] } },
  ],
}