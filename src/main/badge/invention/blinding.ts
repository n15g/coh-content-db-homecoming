import { BadgeData } from 'coh-content-db'

export const Blinding: BadgeData = {
  type: 'INVENTION',
  key: 'blinding',
  setTitle: { id: 775 },
  name: [{ value: 'Blinding' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 10: Sleep, Snare, Hold, Stun, Immobilize, and Fear.' }],
  links: [
    { title: 'Blinding Badge', href: 'https://homecoming.wiki/wiki/Blinding_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png' }],
  requirements: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 10,
      inventionTypes: ['SLEEP', 'SLOW', 'HOLD', 'STUN', 'IMMOBILIZE', 'FEAR'],
      inventionCount: 8,
    },
  ],
}
