import { BadgeData } from 'coh-content-db'

export const Ostentatious: BadgeData = {
  type: 'EVENT',
  key: 'ostentatious',
  setTitle: { id: 840 },
  name: [
    { value: 'Ostentatious' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve collected 50 classic costumes.' },
  ],
  acquisition: 'Collect 50 costumes during the Halloween event',
  notes: 'During the Halloween Event trick or treating occasionally drops Temporary Powers that will let the player dress up as various enemy factions.'
    + '\n\nCollect 10 of them for this badge.',
  links: [
    { title: 'Ostentatious Badge', href: 'https://homecoming.wiki/wiki/Ostentatious_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/costume-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/costume-v.png' },
  ],
}
