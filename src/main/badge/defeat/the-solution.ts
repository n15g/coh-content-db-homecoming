import { BadgeData } from 'coh-content-db'

export const TheSolution: BadgeData = {
  type: 'DEFEAT',
  key: 'the-solution',
  setTitle: { id: 44 },
  name: [
    { value: 'The Solution' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You have bested Jurassik, the personification of the ideals of the Devouring Earth. The world '
        + 'sleeps safer at night due to your actions.',
    },
  ],
  acquisition: 'Defeat Jurassik, a monster that spawns in Crey\'s Folly',
  links: [
    { title: 'The Solution Badge', href: 'https://homecoming.wiki/wiki/The_Solution_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/devouring.png' },
  ],
}
