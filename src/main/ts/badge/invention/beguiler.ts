import { BadgeData } from 'coh-content-db'

export const Beguiler: BadgeData = {
  type: 'invention',
  key: 'beguiler',
  setTitleId: [776],
  name: 'Beguiler',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 15 and 20: Sleep, Snare, Hold, Stun, Immobilize, and Fear.',
  links: [
    { title: 'Beguiler Badge', href: 'https://homecoming.wiki/wiki/Guardian_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 15,
      inventionTypes: ['sleep', 'slow', 'hold', 'stun', 'immobilize', 'fear'],
      count: 5,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 20,
      inventionTypes: ['sleep', 'slow', 'hold', 'stun', 'immobilize', 'fear'],
      count: 5,
    },
  ],
}
