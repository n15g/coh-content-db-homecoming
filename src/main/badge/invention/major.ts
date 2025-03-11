import { BadgeData } from 'coh-content-db'

export const Major: BadgeData = {
  type: 'INVENTION',
  key: 'major',
  setTitle: { id: 790 },
  name: [{ value: 'Major' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 10: Accuracy and To Hit Buff.' }],
  links: [
    { title: 'Major Badge', href: 'https://homecoming.wiki/wiki/Major_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 10,
      inventionTypes: ['ACCURACY', 'TO_HIT_BUFF'],
      inventionCount: 10,
    },
  ],
}
