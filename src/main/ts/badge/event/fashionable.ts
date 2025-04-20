import { BadgeData } from 'coh-content-db'

export const Fashionable: BadgeData = {
  type: 'event',
  key: 'fashionable',
  setTitleId: [839],
  name: 'Fashionable',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've collected 25 classic costumes.`,
  acquisition: 'Collect 25 costumes during the Halloween event.',
  notes: 'During the Halloween Event trick or treating occasionally drops Temporary Powers that will let the player dress up as various enemy factions.',
  links: [
    { title: 'Fashionable Badge', href: 'https://homecoming.wiki/wiki/Fashionable_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/costume-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/costume-v.png' },
  ],
}
