import { BadgeData } from 'coh-content-db'

export const Locksmith: BadgeData = {
  type: 'defeat',
  key: 'locksmith',
  setTitleId: [553],
  name: [
    { alignment: 'hero', value: 'Locksmith' },
    { alignment: 'villain', value: 'Safecracker' },
  ],
  releaseDate: '2012-11-30',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `With your knowledge of safecracking, you've given the local locksmiths a few pointers.` },
    { alignment: 'villain', value: 'No vault can keep its treasures safe from your brutal onslaught.' },
  ],
  acquisition: 'Destroy 10 Vault Doors in Mayhem Missions.',
  links: [
    { title: 'Locksmith Badge', href: 'https://homecoming.wiki/wiki/Locksmith_Badge' },
    { title: 'Safecracker Badge', href: 'https://homecoming.wiki/wiki/Safecracker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/locksmith.png',
}
