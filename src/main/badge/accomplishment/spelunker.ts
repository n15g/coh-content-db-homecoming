import { BadgeData } from 'coh-content-db'

export const Spelunker: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'spelunker',
  setTitle: { id: 72 },
  name: [
    { value: 'Spelunker' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: 'You have freed a local fortune teller from the clutches of the Circle of Thorns.' },
  ],
  acquisition: 'Complete the Rescue Fortune Teller mission from Dr. Trevor Seaborn, Hugo Redding, or Haley Philips',
  links: [
    { title: 'Spelunker Badge', href: 'https://homecoming.wiki/wiki/Spelunker_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/spelunker.png' },
  ],
}
