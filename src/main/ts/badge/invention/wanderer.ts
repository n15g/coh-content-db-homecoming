import { BadgeData } from 'coh-content-db'

export const Wanderer: BadgeData = {
  type: 'invention',
  key: 'wanderer',
  setTitleId: [802],
  name: 'Wanderer',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 25 and 30: Run Speed, Jump, Fly Speed, and Range.',
  effect: 'Awards +2 to Invention Salvage capacity.',
  links: [
    { title: 'Wanderer Badge', href: 'https://homecoming.wiki/wiki/Wanderer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 25,
      inventionTypes: ['run-speed', 'jump', 'fly-speed', 'range'],
      count: 8,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 30,
      inventionTypes: ['run-speed', 'jump', 'fly-speed', 'range'],
      count: 8,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
