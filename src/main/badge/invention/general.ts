import { BadgeData } from 'coh-content-db'

export const General: BadgeData = {
  type: 'INVENTION',
  key: 'general',
  setTitle: { id: 794 },
  name: [{ value: 'General' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 45 and 50: Accuracy and To Hit Buff.' }],
  effect: '+1 to Recipe capacity',
  links: [
    { title: 'General Badge', href: 'https://homecoming.wiki/wiki/General_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 45,
      inventionTypes: ['ACCURACY', 'TO_HIT_BUFF'],
      inventionCount: 14,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 50,
      inventionTypes: ['ACCURACY', 'TO_HIT_BUFF'],
      inventionCount: 14,
    },
  ],
}
