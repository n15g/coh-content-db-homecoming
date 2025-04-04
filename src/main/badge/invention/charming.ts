import { BadgeData } from 'coh-content-db'

export const Charming: BadgeData = {
  type: 'invention',
  key: 'charming',
  setTitleId: [777],
  name: [{ value: 'Charming' }],
  morality: 'all',
  badgeText: [{ value: 'You have memorized the following recipes at level 25 and 30: Sleep, Snare, Hold, Stun, Immobilize, and Fear.' }],
  effect: '+2 to Invention Salvage capacity',
  links: [
    { title: 'Charming Badge', href: 'https://homecoming.wiki/wiki/Charming_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png' }],
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 25,
      inventionTypes: ['sleep', 'slow', 'hold', 'stun', 'immobilize', 'fear'],
      count: 6,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 30,
      inventionTypes: ['sleep', 'slow', 'hold', 'stun', 'immobilize', 'fear'],
      count: 6,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
