import { BadgeData } from 'coh-content-db'

export const Terminator: BadgeData = {
  type: 'DEFEAT',
  key: 'terminator',
  setTitle: { id: 1323 },
  name: [
    { value: 'Terminator' },
  ],
  alignment: ['V'],
  badgeText: [
    { alignment: 'H', value: `Given your past deeds, many of Paragon City's citizens are understandably wary of you.` },
    { alignment: 'V', value: `The citizens of Paragon City flee in terror when they see you coming.` },
  ],
  icon: [{ value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/terminator.png' }],
  acquisition: 'Kill 1000 citizens in mayhem missions',
  links: [
    { title: 'Terminator Badge', href: 'https://homecoming.wiki/wiki/Terminator_Badge' },
  ],
}
