import { BadgeData } from 'coh-content-db'

export const Defensive: BadgeData = {
  type: 'INVENTION',
  key: 'defensive',
  setTitle: { id: 774 },
  name: [{ value: 'Defensive' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 45 and 50: Defense Buff, Resist Damage, Intangible.' }],
  effect: '+1 to Recipe capacity',
  links: [
    { title: 'Defensive Badge', href: 'https://homecoming.wiki/wiki/Defensive_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 45,
      inventionTypes: ['DEFENSE_BUFF', 'RESIST_DAMAGE', 'INTANGIBILITY'],
      inventionCount: 9,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 50,
      inventionTypes: ['DEFENSE_BUFF', 'RESIST_DAMAGE', 'INTANGIBILITY'],
      inventionCount: 9,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ],
}
