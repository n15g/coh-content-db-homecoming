import { BadgeData } from 'coh-content-db'

export const Locksmith: BadgeData = {
  type: 'DEFEAT',
  key: 'locksmith',
  setTitle: { id: 553 },
  name: [
    { alignment: 'H', value: 'Locksmith' },
    { alignment: 'V', value: 'Safecracker' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: 'With your knowledge of safecracking, you\'ve given the local locksmiths a few pointers.' },
    { alignment: 'V', value: 'No vault can keep its treasures safe from your brutal onslaught.' },
  ],
  acquisition: 'Destroy 10 Vault Doors in Mayhem Missions',
  links: [
    { title: 'Locksmith Badge', href: 'https://homecoming.wiki/wiki/Locksmith_Badge' },
    { title: 'Safecracker Badge', href: 'https://homecoming.wiki/wiki/Safecracker_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/locksmith.png' },
  ],
}
