import { BadgeData } from 'coh-content-db'

export const Mesmerizer: BadgeData = {
  type: 'INVENTION',
  key: 'mesmerizer',
  setTitle: { id: 779 },
  name: [{ value: 'Mesmerizer' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 45 and 50: Sleep, Snare, Hold, Stun, Immobilize, and Fear.' }],
  effect: '+1 to Recipe capacity',
  links: [
    { title: 'Mesmerizer Badge', href: 'https://homecoming.wiki/wiki/Mesmerizer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 45,
      inventionTypes: ['SLEEP', 'SLOW', 'HOLD', 'STUN', 'IMMOBILIZE', 'FEAR'],
      inventionCount: 11,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 50,
      inventionTypes: ['SLEEP', 'SLOW', 'HOLD', 'STUN', 'IMMOBILIZE', 'FEAR'],
      inventionCount: 11,
    },
  ],
}
