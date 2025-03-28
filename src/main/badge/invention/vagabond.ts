import { BadgeData } from 'coh-content-db'

export const Vagabond: BadgeData = {
  type: 'INVENTION',
  key: 'vagabond',
  setTitle: { id: 801 },
  name: [{ value: 'Vagabond' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 15 and 20: Run Speed, Jump, Fly Speed, and Range.' }],
  links: [
    { title: 'Vagabond Badge', href: 'https://homecoming.wiki/wiki/Vagabond_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 15,
      inventionTypes: ['RUN_SPEED', 'JUMP', 'FLY_SPEED', 'RANGE'],
      inventionCount: 6,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 20,
      inventionTypes: ['RUN_SPEED', 'JUMP', 'FLY_SPEED', 'RANGE'],
      inventionCount: 6,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ]],
}
