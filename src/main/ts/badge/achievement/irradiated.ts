import { BadgeData } from 'coh-content-db'

export const Irradiated: BadgeData = {
  type: 'achievement',
  key: 'irradiated',
  setTitleId: [401],
  name: 'Irradiated',
  morality: 'all',
  badgeText: `You've basked for more than one hour in the weird radiation of Bloody Bay.`,
  acquisition: 'Spend 1 hour in Bloody Bay.',
  links: [
    { title: 'Irradiated Badge', href: 'https://homecoming.wiki/wiki/Irradiated_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/time-v.png' },
  ],
}
