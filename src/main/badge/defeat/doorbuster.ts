import { BadgeData } from 'coh-content-db'

export const Doorbuster: BadgeData = {
  type: 'DEFEAT',
  key: 'doorbuster',
  setTitle: { id: 2091 },
  name: [
    { value: 'Doorbuster' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'No magical or mechanical barrier can keep you contained.' },
  ],
  acquisition: 'Destroy 100 Force Field Doors, Magical Barriers or Reinforced doors',
  links: [
    { title: 'Doorbuster Badge', href: 'https://homecoming.wiki/wiki/Doorbuster_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/doorbuster.png' },
  ],
}
