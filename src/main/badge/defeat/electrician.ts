import { BadgeData } from 'coh-content-db'

export const Electrician: BadgeData = {
  type: 'DEFEAT',
  key: 'electrician',
  setTitle: { id: 299 },
  name: [
    { value: 'Electrician' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'The Cap au Diable demons have learned not to mess with you.' },
  ],
  acquisition: 'Defeat 100 Gremlins',
  links: [
    { title: 'Electrician Badge', href: 'https://homecoming.wiki/wiki/Electrician_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/electrician.png' },
  ],
}
