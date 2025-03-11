import { BadgeData } from 'coh-content-db'

export const Buddy: BadgeData = {
  type: 'DEFEAT',
  key: 'buddy',
  setTitle: { id: 2327 },
  name: [
    { value: 'Buddy' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [{ value: `Even in defeat, Hamidon is a force to contend with. You have cleaned up the mess left behind after Hamidon's demise.` }],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/buddy.png' }],
  acquisition: 'Defeat 100 Hamidon Buds',
  links: [
    { title: 'Buddy Badge', href: 'https://homecoming.wiki/wiki/Buddy_Badge' },
  ],
}
