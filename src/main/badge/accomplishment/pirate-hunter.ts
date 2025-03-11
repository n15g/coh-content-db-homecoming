import { BadgeData } from 'coh-content-db'

export const PirateHunter: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'pirate-hunter',
  setTitle: { id: 513 },
  name: [
    { alignment: 'H', value: 'Pirate Hunter' },
    { alignment: 'V', value: 'Air Pirate' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'You disrupted the Sky Raiders\' wave of thefts and defeated Col. Duray himself on their '
        + 'off-shore base.',
    },
  ],
  acquisition: 'Complete the Silver Mantis Strike Force: Pirates of the Sky',
  links: [
    { title: 'Pirate Hunter Badge', href: 'https://homecoming.wiki/wiki/Pirate_Hunter_Badge' },
    { title: 'Air Pirate Badge', href: 'https://homecoming.wiki/wiki/Air_Pirate_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pirate-hunter.png' },
  ],
}
