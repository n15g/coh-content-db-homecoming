import { BadgeData } from 'coh-content-db'

export const Wanderer: BadgeData = {
  type: 'INVENTION',
  key: 'wanderer',
  setTitle: { id: 802 },
  name: [{ value: 'Wanderer' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 25 and 30: Run Speed, Jump, Fly Speed, and Range.' }],
  effect: '+2 to Invention Salvage capacity',
  links: [
    { title: 'Wanderer Badge', href: 'https://homecoming.wiki/wiki/Wanderer_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png' }],
  requirements: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 25,
      inventionTypes: ['RUN_SPEED', 'JUMP', 'FLY_SPEED', 'RANGE'],
      inventionCount: 8,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 30,
      inventionTypes: ['RUN_SPEED', 'JUMP', 'FLY_SPEED', 'RANGE'],
      inventionCount: 8,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ],
}
