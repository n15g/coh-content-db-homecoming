import { BadgeData } from 'coh-content-db'

export const Frostbitten: BadgeData = {
  type: 'event',
  key: 'frostbitten',
  setTitleId: [1056],
  name: 'Frostbitten',
  morality: 'all',
  badgeText: [
    { alignment: 'hero', value: 'You have spent time in Paragon City during the winter and have felt winter\'s bite.' },
    { alignment: 'villain', value: 'You have spent time in Rogue Isles during the winter and have felt winter\'s bite.' },
  ],
  acquisition: 'Purchase from the Candy Keeper for 25 Candy Canes and 30,000 inf.',
  links: [
    { title: 'Frostbitten Badge', href: 'https://homecoming.wiki/wiki/Frostbitten_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/event/frostbitten.png',
}
