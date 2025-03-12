import { BadgeData } from 'coh-content-db'

export const Repairman: BadgeData = {
  type: 'OUROBOROS',
  key: 'repairman',
  setTitle: { id: 940 },
  name: [
    { sex: 'M', value: 'Repairman' },
    { sex: 'F', value: 'Repairwoman' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have flashed back to 35 story arcs.' },
  ],
  acquisition: 'Complete 35 Flashback story arcs from the Pillar of Ice and Flame.',
  links: [
    { title: 'Repairman Badge', href: 'https://homecoming.wiki/wiki/Repairman_Badge' },
    { title: 'Repairwoman Badge', href: 'https://homecoming.wiki/wiki/Repairwoman_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/repairman.png' }],
}
