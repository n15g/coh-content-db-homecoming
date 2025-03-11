import { BadgeData } from 'coh-content-db'

export const Laureate: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'laureate',
  setTitle: { id: 1441 },
  name: [
    { value: 'Laureate' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You have no idea what that Lucan thing was, but he will haunt your dreams forever.' },
  ],
  acquisition: 'Complete the The Great Escape zone event in Neutropolis',
  links: [
    { title: 'Laureate Badge', href: 'https://homecoming.wiki/wiki/Laureate_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/laureate.png' },
  ],
}
