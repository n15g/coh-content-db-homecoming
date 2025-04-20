import { BadgeData } from 'coh-content-db'

export const Mesmerizer: BadgeData = {
  type: 'invention',
  key: 'mesmerizer',
  setTitleId: [779],
  name: 'Mesmerizer',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 45 and 50: Sleep, Snare, Hold, Stun, Immobilize, and Fear.',
  effect: 'Awards +1 to Recipe capacity.',
  links: [
    { title: 'Mesmerizer Badge', href: 'https://homecoming.wiki/wiki/Mesmerizer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 45,
      inventionTypes: ['sleep', 'slow', 'hold', 'stun', 'immobilize', 'fear'],
      count: 11,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 50,
      inventionTypes: ['sleep', 'slow', 'hold', 'stun', 'immobilize', 'fear'],
      count: 11,
    },
  ],
}
