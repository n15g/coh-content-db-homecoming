import { BadgeData } from 'coh-content-db'

export const WalksTheEarth: BadgeData = {
  type: 'INVENTION',
  key: 'walks-the-earth',
  setTitle: { id: 803 },
  name: [{ value: 'Walks the Earth' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 35 and 40: Run Speed, Jump, Fly Speed, and Range.' }],
  links: [
    { title: 'Walks the Earth Badge', href: 'https://homecoming.wiki/wiki/Walks_the_Earth_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 35,
      inventionTypes: ['RUN_SPEED', 'JUMP', 'FLY_SPEED', 'RANGE'],
      inventionCount: 11,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 40,
      inventionTypes: ['RUN_SPEED', 'JUMP', 'FLY_SPEED', 'RANGE'],
      inventionCount: 11,
    },
  ],
}
