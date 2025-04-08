import { BadgeData } from 'coh-content-db'

export const Gifted: BadgeData = {
  type: 'event',
  key: 'gifted',
  setTitleId: [967],
  name: 'Gifted',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'The Freedom Phalanx wishes you Happy Holidays!' },
    { alignment: 'villain', value: 'Everyone deserves a Happy Holidays gift.' },
  ],
  acquisition: 'Purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.',
  links: [
    { title: 'Gifted Badge', href: 'https://homecoming.wiki/wiki/Gifted_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/gifted.png',
}
