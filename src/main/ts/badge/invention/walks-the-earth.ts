import { BadgeData } from 'coh-content-db'

export const WalksTheEarth: BadgeData = {
  type: 'invention',
  key: 'walks-the-earth',
  setTitleId: [803],
  name: 'Walks the Earth',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 35 and 40: Run Speed, Jump, Fly Speed, and Range.',
  links: [
    { title: 'Walks the Earth Badge', href: 'https://homecoming.wiki/wiki/Walks_the_Earth_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 35,
      inventionTypes: ['run-speed', 'jump', 'fly-speed', 'range'],
      count: 11,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 40,
      inventionTypes: ['run-speed', 'jump', 'fly-speed', 'range'],
      count: 11,
    },
  ],
}
