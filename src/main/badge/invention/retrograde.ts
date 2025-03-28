import { BadgeData } from 'coh-content-db'

export const Retrograde: BadgeData = {
  type: 'INVENTION',
  key: 'retrograde',
  setTitle: { id: 764 },
  name: [{ value: 'Retrograde' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 45 and 50: Defense Debuff, To Hit Debuff, Taunt, and Confuse.' }],
  links: [
    { title: 'Retrograde Badge', href: 'https://homecoming.wiki/wiki/Retrograde_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 45,
      inventionTypes: ['DEFENSE_DEBUFF', 'TO_HIT_DEBUFF', 'TAUNT', 'CONFUSE'],
      inventionCount: 3,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 50,
      inventionTypes: ['DEFENSE_DEBUFF', 'TO_HIT_DEBUFF', 'TAUNT', 'CONFUSE'],
      inventionCount: 3,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ]],
}
