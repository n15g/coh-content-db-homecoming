import { BadgeData } from 'coh-content-db'

export const MajorGeneral: BadgeData = {
  type: 'INVENTION',
  key: 'major-general',
  setTitle: { id: 793 },
  name: [{ value: 'Major General' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 35 and 40: Accuracy and To Hit Buff.' }],
  links: [
    { title: 'Major General Badge', href: 'https://homecoming.wiki/wiki/Major_General_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png' }],
  requirements: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 35,
      inventionTypes: ['ACCURACY', 'TO_HIT_BUFF'],
      inventionCount: 11,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 40,
      inventionTypes: ['ACCURACY', 'TO_HIT_BUFF'],
      inventionCount: 11,
    },
  ],
}
