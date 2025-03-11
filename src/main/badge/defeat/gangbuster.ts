import { BadgeData } from 'coh-content-db'

export const Gangbuster: BadgeData = {
  type: 'DEFEAT',
  key: 'gangbuster',
  setTitle: { id: 309 },
  name: [
    { value: 'Gangbuster' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'The Family knows better than to mess with you.' },
  ],
  acquisition: 'Defeat 200 minions or lieutenants of The Family.',
  links: [
    { title: 'Gangbuster Badge', href: 'https://homecoming.wiki/wiki/Gangbuster_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/gangbuster.png' },
  ],
}
