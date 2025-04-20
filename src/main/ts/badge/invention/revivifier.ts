import { BadgeData } from 'coh-content-db'

export const Revivifier: BadgeData = {
  type: 'invention',
  key: 'revivifier',
  setTitleId: [768],
  name: 'Revivifier',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 35 and 40: Heal.',
  links: [
    { title: 'Revivifier Badge', href: 'https://homecoming.wiki/wiki/Revivifier_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 35,
      inventionTypes: ['healing'],
      count: 7,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 40,
      inventionTypes: ['healing'],
      count: 7,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
