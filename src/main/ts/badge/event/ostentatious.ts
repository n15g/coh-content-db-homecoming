import { BadgeData } from 'coh-content-db'

export const Ostentatious: BadgeData = {
  type: 'event',
  key: 'ostentatious',
  setTitleId: [840],
  name: 'Ostentatious',
  morality: 'all',
  badgeText: `You've collected 50 classic costumes.`,
  acquisition: 'Collect 50 costumes during the Halloween event.',
  notes: `During the Halloween Event trick or treating occasionally drops Temporary Powers that will let the player dress up as various enemy factions.`,
  links: [
    { title: 'Ostentatious Badge', href: 'https://homecoming.wiki/wiki/Ostentatious_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/costume-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/costume-v.png' },
  ],
}
