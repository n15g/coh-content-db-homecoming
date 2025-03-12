import { BadgeData } from 'coh-content-db'

export const VirtualVictim: BadgeData = {
  type: 'AE',
  key: 'virtual-victim',
  setTitle: { id: 1233 },
  name: [
    { value: 'Virtual Victim' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You\'ve been defeated within a virtual environment earning yourself the Virtual Victim badge.' }],
  acquisition: 'Be defeated in a Mission Architect mission while in Test Mode.',
  links: [
    { title: 'Virtual Victim Badge', href: 'https://homecoming.wiki/wiki/Virtual_Victim_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/virtual-victim.png' }],
}
