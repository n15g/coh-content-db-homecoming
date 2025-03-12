import { BadgeData } from 'coh-content-db'

export const Destructive: BadgeData = {
  type: 'AE',
  key: 'destructive',
  setTitle: { id: 1250 },
  name: [
    { value: 'Destructive' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: 'You\'ve destroyed your first object during an Architect mission, earning yourself the Destructive badge.' }],
  acquisition: 'Destroy a destructible object inside a published Mission Architect mission.',
  links: [
    { title: 'Destructive Badge', href: 'https://homecoming.wiki/wiki/Destructive_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ae/destructive.png' }],
}
