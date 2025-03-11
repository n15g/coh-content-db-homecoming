import { BadgeData } from 'coh-content-db'

export const HiredGun: BadgeData = {
  type: 'INVENTION',
  key: 'hired-gun',
  setTitle: { id: 786 },
  name: [{ value: 'Hired Gun' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 15 and 20: Recharge Rate and Interrupt Time.' }],
  links: [
    { title: 'Hired Gun Badge', href: 'https://homecoming.wiki/wiki/Hired_Gun_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-2.png' }],
  partials: [
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 15,
      inventionTypes: ['RECHARGE_REDUCTION', 'INTERRUPT_DURATION'],
      inventionCount: 6,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 20,
      inventionTypes: ['RECHARGE_REDUCTION', 'INTERRUPT_DURATION'],
      inventionCount: 6,
    },
    { key: 'c', type: 'INVENTION_PLUS_ONE' },
  ],
}
