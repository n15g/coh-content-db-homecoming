import { BadgeData } from 'coh-content-db'

export const Charismatic: BadgeData = {
  type: 'invention',
  key: 'charismatic',
  setTitleId: [778],
  name: 'Charismatic',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 35 and 40: Sleep, Snare, Hold, Stun, Immobilize, and Fear.',
  links: [
    { title: 'Charismatic Badge', href: 'https://homecoming.wiki/wiki/Charismatic_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 35,
      inventionTypes: ['sleep', 'slow', 'hold', 'stun', 'immobilize', 'fear'],
      count: 8,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 40,
      inventionTypes: ['sleep', 'slow', 'hold', 'stun', 'immobilize', 'fear'],
      count: 8,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
