import { BadgeData } from 'coh-content-db'

export const Reanimator: BadgeData = {
  type: 'invention',
  key: 'reanimator',
  setTitleId: [769],
  name: 'Reanimator',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 45 and 50: Heal.',
  effect: 'Awards +1 to Recipe capacity.',
  links: [
    { title: 'Reanimator Badge', href: 'https://homecoming.wiki/wiki/Reanimator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 45,
      inventionTypes: ['healing'],
      count: 9,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 50,
      inventionTypes: ['healing'],
      count: 9,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
