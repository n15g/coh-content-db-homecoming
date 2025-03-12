import { BadgeData } from 'coh-content-db'

export const Privateer: BadgeData = {
  type: 'DEFEAT',
  key: 'privateer',
  setTitle: { id: 52 },
  name: [
    { value: 'Privateer' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have put a huge dent into the pocketbooks of the Sky Raiders by destroying their most '
        + 'expensive equipment, the Sky Skiffs.',
    },
  ],
  acquisition: 'Defeat 100 Sky Raiders Sky Skiffs',
  links: [
    { title: 'Privateer Badge', href: 'https://homecoming.wiki/wiki/Privateer_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/privateer.png' },
  ],
}
