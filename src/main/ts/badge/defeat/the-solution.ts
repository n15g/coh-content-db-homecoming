import { BadgeData, zoneLink } from 'coh-content-db'
import { CreysFolly } from '../../zone/creys-folly'

export const TheSolution: BadgeData = {
  type: 'defeat',
  key: 'the-solution',
  setTitleId: [44],
  name: 'The Solution',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You have bested Jurassik, the personification of the ideals of the Devouring Earth. The world sleeps safer at night due to your actions.`,
  acquisition: `Defeat Jurassik, a monster that spawns in ${zoneLink(CreysFolly)}.`,
  links: [
    { title: 'The Solution Badge', href: 'https://homecoming.wiki/wiki/The_Solution_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/devouring.png',
}
