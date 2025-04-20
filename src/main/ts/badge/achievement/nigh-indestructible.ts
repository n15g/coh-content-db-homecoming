import { BadgeData } from 'coh-content-db'

export const NighIndestructible: BadgeData = {
  type: 'achievement',
  key: 'nigh-indestructible',
  setTitleId: [230, 1678],
  name: [
    { value: 'Nigh Indestructible' },
    { alignment: 'praetorian', value: 'Concussed' },
  ],
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: [
    { value: 'You have proven yourself Indestructible. You have survived twenty five million points of damage.' },
    { alignment: 'praetorian', value: `At some point, your ability to take a pounding may lead to delusions of grandeur. Well, are they really delusions if they're true?` },
  ],
  acquisition: 'Endure 25,000,000 points of damage.',
  links: [
    { title: 'Nigh Indestructible Badge', href: 'https://homecoming.wiki/wiki/Nigh_Indestructible_Badge' },
    { title: 'Concussed Badge', href: 'https://homecoming.wiki/wiki/Concussed_Badge' },
  ],
  icon: [
    { alignment: 'hero', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png' },
    { alignment: 'villain', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png' },
  ],
}
