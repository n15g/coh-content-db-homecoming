import { BadgeData } from 'coh-content-db'

export const VirtualVictor: BadgeData = {
  type: 'AE',
  key: 'virtual-victor',
  setTitle: { id: 1167 },
  name: [
    { value: 'Virtual Victor' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You\'ve defeated your first enemy in Test Mode earning yourself the Virtual Victor badge.' }],
  acquisition: 'Defeat one enemy while testing your Architect missions.',
  links: [
    { title: 'Virtual Victor Badge', href: 'https://homecoming.wiki/wiki/Virtual_Victor_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/virtual-victor.png' }],
}
