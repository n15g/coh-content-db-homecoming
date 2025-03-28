import { BadgeData } from 'coh-content-db'

export const Nomad: BadgeData = {
  type: 'INVENTION',
  key: 'nomad',
  setTitle: { id: 804 },
  name: [{ value: 'Nomad' }],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You have memorized the following recipes at level 45 and 50: Run Speed, Jump, Fly Speed, and Range.' }],
  effect: '+1 to Recipe capacity',
  links: [
    { title: 'Nomad Badge', href: 'https://homecoming.wiki/wiki/Nomad_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/brain-5.png' }],
  requirements: [[
    {
      key: 'a',
      type: 'INVENTION',
      inventionLevel: 45,
      inventionTypes: ['RUN_SPEED', 'JUMP', 'FLY_SPEED', 'RANGE'],
      inventionCount: 14,
    },
    {
      key: 'b',
      type: 'INVENTION',
      inventionLevel: 50,
      inventionTypes: ['RUN_SPEED', 'JUMP', 'FLY_SPEED', 'RANGE'],
      inventionCount: 14,
    },
  ]],
}
