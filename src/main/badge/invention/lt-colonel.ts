import { BadgeData } from 'coh-content-db'

export const LtColonel: BadgeData = {
  type: 'INVENTION',
  key: 'lt-colonel',
  setTitle: { id: 791 },
  name: [{ value: 'Lt. Colonel' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 15 and 20: Accuracy and To Hit Buff.' }],
  links: [
    { title: 'Lt. Colonel Badge', href: 'https://homecoming.wiki/wiki/Lt._Colonel_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png' }],
  requirements: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 15,
      inventionTypes: ['ACCURACY', 'TO_HIT_BUFF'],
      inventionCount: 6,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 20,
      inventionTypes: ['ACCURACY', 'TO_HIT_BUFF'],
      inventionCount: 6,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ],
}
