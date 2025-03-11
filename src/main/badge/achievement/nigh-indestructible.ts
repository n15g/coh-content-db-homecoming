import { BadgeData } from 'coh-content-db'

export const NighIndestructible: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'nigh-indestructible',
  setTitle: { id: 230, praetorianId: 1678 },
  name: [
    { value: 'Nigh Indestructible' },
    { alignment: 'P', value: 'Concussed' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have proven yourself Indestructible. You have survived twenty five million points of '
        + 'damage.',
    },
    {
      alignment: 'P', value: 'At some point, your ability to take a pounding may lead to delusions of grandeur. Well, are '
        + 'they really delusions if they\'re true?',
    },
  ],
  acquisition: 'Endure 25,000,000 points of damage',
  links: [
    { title: 'Nigh Indestructible Badge', href: 'https://homecoming.wiki/wiki/Nigh_Indestructible_Badge' },
    { title: 'Concussed Badge', href: 'https://homecoming.wiki/wiki/Concussed_Badge' },
  ],
  icon: [
    { alignment: 'H', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-h.png' },
    { alignment: 'V', value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/dmg-in-v.png' },
  ],
}
