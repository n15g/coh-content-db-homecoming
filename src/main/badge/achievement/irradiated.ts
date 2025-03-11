import { BadgeData } from 'coh-content-db'

export const Irradiated: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'irradiated',
  setTitle: { id: 401 },
  name: [
    { value: 'Irradiated' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    { value: 'You\'ve basked for more than one hour in the weird radiation of Bloody Bay.' },
  ],
  acquisition: 'Spend 1 hour in Bloody Bay',
  links: [
    { title: 'Irradiated Badge', href: 'https://homecoming.wiki/wiki/Irradiated_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png' },
  ],
}
