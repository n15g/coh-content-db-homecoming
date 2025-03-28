import { BadgeData } from 'coh-content-db'

export const HitMan: BadgeData = {
  type: 'INVENTION',
  key: 'hit-man',
  setTitle: { id: 787 },
  name: [{ value: 'Hit-Man' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 25 and 30: Recharge Rate and Interrupt Time.' }],
  effect: '+2 to Invention Salvage capacity',
  links: [
    { title: 'Hit-Man Badge', href: 'https://homecoming.wiki/wiki/Hit-Man_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-3.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 25,
      inventionTypes: ['RECHARGE_REDUCTION', 'INTERRUPT_DURATION'],
      inventionCount: 8,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 30,
      inventionTypes: ['RECHARGE_REDUCTION', 'INTERRUPT_DURATION'],
      inventionCount: 8,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ]],
}
