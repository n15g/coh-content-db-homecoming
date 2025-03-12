import { BadgeData } from 'coh-content-db'

export const TheSilverBullet: BadgeData = {
  type: 'DEFEAT',
  key: 'the-silver-bullet',
  setTitle: { id: 34 },
  name: [
    { value: 'The Silver Bullet' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'The Warwolves have a nickname for you: The Silver Bullet.' },
  ],
  acquisition: 'Defeat 200 Council Warwolves',
  links: [
    { title: 'The Silver Bullet Badge', href: 'https://homecoming.wiki/wiki/The_Silver_Bullet_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/council.png' },
  ],
}
