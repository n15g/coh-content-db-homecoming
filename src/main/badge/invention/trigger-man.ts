import { BadgeData } from 'coh-content-db'

export const TriggerMan: BadgeData = {
  type: 'INVENTION',
  key: 'trigger-man',
  setTitle: { id: 785 },
  name: [{ value: 'Trigger Man' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 10: Recharge Rate and Interrupt Time.' }],
  links: [
    { title: 'Trigger Man Badge', href: 'https://homecoming.wiki/wiki/Trigger_Man_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-1.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 10,
      inventionTypes: ['RECHARGE_REDUCTION', 'INTERRUPT_DURATION'],
      inventionCount: 10,
    },
  ]],
}
