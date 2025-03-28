import { BadgeData } from 'coh-content-db'

export const Dismantler: BadgeData = {
  type: 'INVENTION',
  key: 'dismantler',
  setTitle: { id: 763 },
  name: [{ value: 'Dismantler' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 35 and 40: Defense Debuff, To Hit Debuff, Taunt, and Confuse.' }],
  links: [
    { title: 'Dismantler Badge', href: 'https://homecoming.wiki/wiki/Dismantler_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 35,
      inventionTypes: ['DEFENSE_DEBUFF', 'TO_HIT_DEBUFF', 'TAUNT', 'CONFUSE'],
      inventionCount: 2,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 40,
      inventionTypes: ['DEFENSE_DEBUFF', 'TO_HIT_DEBUFF', 'TAUNT', 'CONFUSE'],
      inventionCount: 2,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ]],
}
