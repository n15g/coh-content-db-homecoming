import { BadgeData } from 'coh-content-db'

export const Beguiler: BadgeData = {
  type: 'INVENTION',
  key: 'beguiler',
  setTitle: { id: 776 },
  name: [{ value: 'Beguiler' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 15 and 20: Sleep, Snare, Hold, Stun, Immobilize, and Fear.' }],
  links: [
    { title: 'Beguiler Badge', href: 'https://homecoming.wiki/wiki/Guardian_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 15,
      inventionTypes: ['SLEEP', 'SLOW', 'HOLD', 'STUN', 'IMMOBILIZE', 'FEAR'],
      inventionCount: 5,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 20,
      inventionTypes: ['SLEEP', 'SLOW', 'HOLD', 'STUN', 'IMMOBILIZE', 'FEAR'],
      inventionCount: 5,
    },
  ],
}
