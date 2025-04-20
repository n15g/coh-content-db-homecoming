import { BadgeData } from 'coh-content-db'

export const ClothesHorse: BadgeData = {
  type: 'event',
  key: 'clothes-horse',
  setTitleId: [838],
  name: 'Clothes Horse',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You've collected 10 classic costumes.`,
  acquisition: 'Collect 10 costumes during the Halloween event.',
  notes: `During the Halloween Event trick or treating occasionally drops Temporary Powers that will let the player dress up as various enemy factions.`,
  links: [
    { title: 'Clothes Horse Badge', href: 'https://homecoming.wiki/wiki/Clothes_Horse_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/costume-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/costume-v.png' },
  ],
}
