import { BadgeData } from 'coh-content-db'

export const Decaying: BadgeData = {
  type: 'INVENTION',
  key: 'decaying',
  setTitle: { id: 761 },
  name: [{ value: 'Decaying' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 15 and 20: Defense Debuff, To Hit Debuff, Taunt, and Confuse.' }],
  links: [
    { title: 'Decaying Badge', href: 'https://homecoming.wiki/wiki/Decaying_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 15,
      inventionTypes: ['DEFENSE_DEBUFF', 'TO_HIT_DEBUFF', 'TAUNT', 'CONFUSE'],
      inventionCount: 1,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 20,
      inventionTypes: ['DEFENSE_DEBUFF', 'TO_HIT_DEBUFF', 'TAUNT', 'CONFUSE'],
      inventionCount: 1,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ]],
}
