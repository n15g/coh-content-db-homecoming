import { BadgeData } from 'coh-content-db'

export const Pilgrim: BadgeData = {
  type: 'invention',
  key: 'pilgrim',
  setTitleId: [800],
  name: 'Pilgrim',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 10: Run Speed, Jump, Fly Speed, and Range.',
  links: [
    { title: 'Pilgrim Badge', href: 'https://homecoming.wiki/wiki/Pilgrim_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 10,
      inventionTypes: ['run-speed', 'jump', 'fly-speed', 'range'],
      count: 10,
    },
  ],
}
