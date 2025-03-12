import { BadgeData } from 'coh-content-db'

export const HolidaySpirit: BadgeData = {
  type: 'EVENT',
  key: 'holiday-spirit',
  setTitle: { id: 521 },
  name: [
    { alignment: 'H', value: 'Holiday Spirit' },
    { alignment: 'V', value: 'Scrooge' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { alignment: 'H', value: 'Arachnos tried to ruin the holidays, but you have done your best to stop them.' },
    { alignment: 'V', value: 'Bah humbug! You\'ve done your best to disrupt the holidays over in Paragon City.' },
  ],
  acquisition: 'Purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.',
  links: [
    { title: 'Holiday Spirit Badge', href: 'https://homecoming.wiki/wiki/Holiday_Spirit_Badge' },
    { title: 'Scrooge Badge', href: 'https://homecoming.wiki/wiki/Scrooge_Badge' },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/holiday-spirit.png' }],
}
