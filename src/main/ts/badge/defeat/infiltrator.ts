import { BadgeData } from 'coh-content-db'

export const Infiltrator: BadgeData = {
  type: 'defeat',
  key: 'infiltrator',
  setTitleId: [42],
  name: 'Infiltrator',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: `You have learned that the Paragon Protectors are an arm of Crey, and not simply an independent group hired by them.`,
  acquisition: 'Defeat 200 Crey Paragon Protectors.',
  links: [
    { title: 'Infiltrator Badge', href: 'https://homecoming.wiki/wiki/Infiltrator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/infiltrator.png',
}
