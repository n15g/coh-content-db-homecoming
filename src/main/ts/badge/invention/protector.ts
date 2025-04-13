import { BadgeData } from 'coh-content-db'

export const Protector: BadgeData = {
  type: 'invention',
  key: 'protector',
  setTitleId: [772],
  name: 'Protector',
  morality: 'all',
  badgeText: 'You have memorized the following recipes at level 25 and 30: Defense Buff, Resist Damage, Intangible.',
  effect: 'Awards +2 to Invention Salvage capacity.',
  links: [
    { title: 'Protector Badge', href: 'https://homecoming.wiki/wiki/Protector_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png',
  requirements: [
    {
      key: 'a',
      type: 'invention',
      inventionLevel: 25,
      inventionTypes: ['defense-buff', 'resist-damage', 'intangibility'],
      count: 6,
    },
    {
      key: 'b',
      type: 'invention',
      inventionLevel: 30,
      inventionTypes: ['defense-buff', 'resist-damage', 'intangibility'],
      count: 6,
    },
  ],
}
