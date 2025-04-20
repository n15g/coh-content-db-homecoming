import { BadgeData } from 'coh-content-db'

export const Vagabond: BadgeData = {
  type: 'invention',
  key: 'vagabond',
  setTitleId: [801],
  name: 'Vagabond',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 15 and 20: Run Speed, Jump, Fly Speed, and Range.',
  links: [
    { title: 'Vagabond Badge', href: 'https://homecoming.wiki/wiki/Vagabond_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 15,
      inventionTypes: ['run-speed', 'jump', 'fly-speed', 'range'],
      count: 6,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 20,
      inventionTypes: ['run-speed', 'jump', 'fly-speed', 'range'],
      count: 6,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
