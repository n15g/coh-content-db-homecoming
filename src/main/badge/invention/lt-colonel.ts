import { BadgeData } from 'coh-content-db'

export const LtColonel: BadgeData = {
  type: 'invention',
  key: 'lt-colonel',
  setTitleId: [791],
  name: [{ value: 'Lt. Colonel' }],
  morality: 'all',
  badgeText: [{ value: 'You have memorized the following recipes at level 15 and 20: Accuracy and To Hit Buff.' }],
  links: [
    { title: 'Lt. Colonel Badge', href: 'https://homecoming.wiki/wiki/Lt._Colonel_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png' }],
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 15,
      inventionTypes: ['accuracy', 'to-hit-buff'],
      count: 6,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 20,
      inventionTypes: ['accuracy', 'to-hit-buff'],
      count: 6,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
