import { BadgeData } from 'coh-content-db'

export const Protector: BadgeData = {
  type: 'INVENTION',
  key: 'protector',
  setTitle: { id: 772 },
  name: [{ value: 'Protector' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 25 and 30: Defense Buff, Resist Damage, Intangible.' }],
  effect: '+2 to Invention Salvage capacity',
  links: [
    { title: 'Protector Badge', href: 'https://homecoming.wiki/wiki/Protector_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png' }],
  requirements: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 25,
      inventionTypes: ['DEFENSE_BUFF', 'RESIST_DAMAGE', 'INTANGIBILITY'],
      inventionCount: 6,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 30,
      inventionTypes: ['DEFENSE_BUFF', 'RESIST_DAMAGE', 'INTANGIBILITY'],
      inventionCount: 6,
    },
  ],
}
