import { BadgeData } from 'coh-content-db'

export const Speeder: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'speeder',
  setTitle: { id: 1058 },
  name: [
    { value: 'Speeder' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have taken the gold medal in the advanced ski course!' },
  ],
  acquisition: 'Complete a ski run on the Advanced slope in under 50 seconds during a Winter Event',
  links: [
    { title: 'Speeder Badge', href: 'https://homecoming.wiki/wiki/Speeder_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/ski-gold.png' },
  ],
}
