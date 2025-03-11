import { BadgeData } from 'coh-content-db'

export const Festive: BadgeData = {
  type: 'EVENT',
  key: 'festive',
  setTitle: { id: 1376 },
  name: [
    { value: 'Festive' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You celebrated the winter season during the annual Winter Event.' },
  ],
  acquisition: `Purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.`,
  links: [
    { title: 'Festive Badge', href: 'https://homecoming.wiki/wiki/Festive_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/festive.png' }],
}
