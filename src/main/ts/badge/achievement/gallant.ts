import { BadgeData } from 'coh-content-db'

export const Gallant: BadgeData = {
  type: 'achievement',
  key: 'gallant',
  setTitleId: [1450],
  name: 'Gallant',
  morality: 'heroic',
  badgeText: `You've proven time and time again that Paragon City can rely on you. You have completed a Hero Morality Mission earning yourself this badge.`,
  acquisition: 'Complete a Hero Morality mission.',
  links: [
    { title: 'Gallant Badge', href: 'https://homecoming.wiki/wiki/Gallant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/gallant.png',
}
