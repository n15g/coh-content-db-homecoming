import { BadgeData } from 'coh-content-db'

export const Repairman: BadgeData = {
  type: 'ouroboros',
  key: 'repairman',
  setTitleId: [940],
  name: [
    { sex: 'M', value: 'Repairman' },
    { sex: 'F', value: 'Repairwoman' },
  ],
  morality: 'all',
  badgeText: 'You have flashed back to 35 story arcs.',
  acquisition: 'Complete 35 Flashback story arcs from the Pillar of Ice and Flame.',
  links: [
    { title: 'Repairman Badge', href: 'https://homecoming.wiki/wiki/Repairman_Badge' },
    { title: 'Repairwoman Badge', href: 'https://homecoming.wiki/wiki/Repairwoman_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/ouroboros/repairman.png',
}
