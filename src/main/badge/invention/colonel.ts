import { BadgeData } from 'coh-content-db'

export const Colonel: BadgeData = {
  type: 'INVENTION',
  key: 'colonel',
  setTitle: { id: 792 },
  name: [{ value: 'Colonel' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 25 and 30: Accuracy and To Hit Buff.' }],
  effect: '+2 to Invention Salvage capacity',
  links: [
    { title: 'Colonel Badge', href: 'https://homecoming.wiki/wiki/Colonel_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 25,
      inventionTypes: ['ACCURACY', 'TO_HIT_BUFF'],
      inventionCount: 8,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 30,
      inventionTypes: ['ACCURACY', 'TO_HIT_BUFF'],
      inventionCount: 8,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ]],
}
