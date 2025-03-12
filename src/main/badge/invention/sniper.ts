import { BadgeData } from 'coh-content-db'

export const Sniper: BadgeData = {
  type: 'INVENTION',
  key: 'sniper',
  setTitle: { id: 788 },
  name: [{ value: 'Sniper' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 35 and 40: Recharge Rate and Interrupt Time.' }],
  links: [
    { title: 'Sniper Badge', href: 'https://homecoming.wiki/wiki/Sniper_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-4.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 35,
      inventionTypes: ['RECHARGE_REDUCTION', 'INTERRUPT_DURATION'],
      inventionCount: 11,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 40,
      inventionTypes: ['RECHARGE_REDUCTION', 'INTERRUPT_DURATION'],
      inventionCount: 11,
    },
  ],
}
