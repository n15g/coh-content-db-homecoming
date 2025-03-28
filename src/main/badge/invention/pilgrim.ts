import { BadgeData } from 'coh-content-db'

export const Pilgrim: BadgeData = {
  type: 'INVENTION',
  key: 'pilgrim',
  setTitle: { id: 800 },
  name: [{ value: 'Pilgrim' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 10: Run Speed, Jump, Fly Speed, and Range.' }],
  links: [
    { title: 'Pilgrim Badge', href: 'https://homecoming.wiki/wiki/Pilgrim_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 10,
      inventionTypes: ['RUN_SPEED', 'JUMP', 'FLY_SPEED', 'RANGE'],
      inventionCount: 10,
    },
  ]],
}
