import { BadgeData } from 'coh-content-db'

export const Sharpshooter: BadgeData = {
  type: 'INVENTION',
  key: 'sharpshooter',
  setTitle: { id: 789 },
  name: [{ value: 'Sharpshooter' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 45 and 50: Recharge Rate and Interrupt Time.' }],
  effect: '+1 to Recipe capacity',
  links: [
    { title: 'Sharpshooter Badge', href: 'https://homecoming.wiki/wiki/Sharpshooter_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 45,
      inventionTypes: ['RECHARGE_REDUCTION', 'INTERRUPT_DURATION'],
      inventionCount: 14,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 50,
      inventionTypes: ['RECHARGE_REDUCTION', 'INTERRUPT_DURATION'],
      inventionCount: 14,
    },
  ],
}
