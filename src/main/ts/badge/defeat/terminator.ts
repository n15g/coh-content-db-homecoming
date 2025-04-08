import { BadgeData } from 'coh-content-db'

export const Terminator: BadgeData = {
  type: 'defeat',
  key: 'terminator',
  setTitleId: [1323],
  name: 'Terminator',
  morality: 'villainous',
  badgeText: [
    { alignment: 'hero', value: `Given your past deeds, many of Paragon City's citizens are understandably wary of you.` },
    { alignment: 'villain', value: `The citizens of Paragon City flee in terror when they see you coming.` },
  ],
  acquisition: 'Kill 1000 citizens in mayhem missions.',
  links: [
    { title: 'Terminator Badge', href: 'https://homecoming.wiki/wiki/Terminator_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/terminator.png',
}
