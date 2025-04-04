import { BadgeData } from 'coh-content-db'

export const Defensive: BadgeData = {
  type: 'invention',
  key: 'defensive',
  setTitleId: [774],
  name: [{ value: 'Defensive' }],
  morality: 'all',
  badgeText: [{ value: 'You have memorized the following recipes at level 45 and 50: Defense Buff, Resist Damage, Intangible.' }],
  effect: '+1 to Recipe capacity',
  links: [
    { title: 'Defensive Badge', href: 'https://homecoming.wiki/wiki/Defensive_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png' }],
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 45,
      inventionTypes: ['defense-buff', 'resist-damage', 'intangibility'],
      count: 9,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 50,
      inventionTypes: ['defense-buff', 'resist-damage', 'intangibility'],
      count: 9,
    },
    { key: 'c', type: 'invention-plus-one' },
  ],
}
