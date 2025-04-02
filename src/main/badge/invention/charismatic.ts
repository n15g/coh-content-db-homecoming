import { BadgeData } from 'coh-content-db'

export const Charismatic: BadgeData = {
  type: 'INVENTION',
  key: 'charismatic',
  setTitle: { id: 778 },
  name: [{ value: 'Charismatic' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 35 and 40: Sleep, Snare, Hold, Stun, Immobilize, and Fear.' }],
  links: [
    { title: 'Charismatic Badge', href: 'https://homecoming.wiki/wiki/Charismatic_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png' }],
  requirements: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 35,
      inventionTypes: ['SLEEP', 'SLOW', 'HOLD', 'STUN', 'IMMOBILIZE', 'FEAR'],
      inventionCount: 8,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 40,
      inventionTypes: ['SLEEP', 'SLOW', 'HOLD', 'STUN', 'IMMOBILIZE', 'FEAR'],
      inventionCount: 8,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ],
}
