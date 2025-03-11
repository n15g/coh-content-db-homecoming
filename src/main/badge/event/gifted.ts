import { BadgeData } from 'coh-content-db'

export const Gifted: BadgeData = {
  type: 'EVENT',
  key: 'gifted',
  setTitle: { id: 967 },
  name: [
    { value: 'Gifted' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'The Freedom Phalanx wishes you Happy Holidays!' },
    { alignment: 'V', value: 'Everyone deserves a Happy Holidays gift.' },
  ],
  acquisition: 'Purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.',
  links: [
    { title: 'Gifted Badge', href: 'https://homecoming.wiki/wiki/Gifted_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/gifted.png' }],
}
