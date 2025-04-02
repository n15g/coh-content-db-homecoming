import { BadgeData } from 'coh-content-db'

export const Reanimator: BadgeData = {
  type: 'INVENTION',
  key: 'reanimator',
  setTitle: { id: 769 },
  name: [{ value: 'Reanimator' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 45 and 50: Heal.' }],
  effect: '+1 to Recipe capacity',
  links: [
    { title: 'Reanimator Badge', href: 'https://homecoming.wiki/wiki/Reanimator_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png' }],
  requirements: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 45,
      inventionTypes: ['HEALING'],
      inventionCount: 9,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 50,
      inventionTypes: ['HEALING'],
      inventionCount: 9,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ],
}
