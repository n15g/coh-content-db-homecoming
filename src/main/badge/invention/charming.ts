import { BadgeData } from 'coh-content-db'

export const Charming: BadgeData = {
  type: 'INVENTION',
  key: 'charming',
  setTitle: { id: 777 },
  name: [{ value: 'Charming' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 25 and 30: Sleep, Snare, Hold, Stun, Immobilize, and Fear.' }],
  effect: '+2 to Invention Salvage capacity',
  links: [
    { title: 'Charming Badge', href: 'https://homecoming.wiki/wiki/Charming_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 25,
      inventionTypes: ['SLEEP', 'SLOW', 'HOLD', 'STUN', 'IMMOBILIZE', 'FEAR'],
      inventionCount: 6,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 30,
      inventionTypes: ['SLEEP', 'SLOW', 'HOLD', 'STUN', 'IMMOBILIZE', 'FEAR'],
      inventionCount: 6,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ],
}
