import { BadgeData } from 'coh-content-db'

export const Colonel: BadgeData = {
  type: 'invention',
  key: 'colonel',
  setTitleId: [792],
  name: [{ value: 'Colonel' }],
  morality: 'all',
  badgeText: [{ value: 'You have memorized the following recipes at level 25 and 30: Accuracy and To Hit Buff.' }],
  effect: '+2 to Invention Salvage capacity',
  links: [
    { title: 'Colonel Badge', href: 'https://homecoming.wiki/wiki/Colonel_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png' }],
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 25,
      inventionTypes: ['accuracy', 'to-hit-buff'],
      count: 8,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 30,
      inventionTypes: ['accuracy', 'to-hit-buff'],
      count: 8,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
