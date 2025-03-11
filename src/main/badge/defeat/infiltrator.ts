import { BadgeData } from 'coh-content-db'

export const Infiltrator: BadgeData = {
  type: 'DEFEAT',
  key: 'infiltrator',
  setTitle: { id: 42 },
  name: [
    { value: 'Infiltrator' },
  ],
  alignment: ['H', 'V', 'P'],
  badgeText: [
    {
      value: 'You have learned that the Paragon Protectors are an arm of Crey, and not simply an independent '
        + 'group hired by them.',
    },
  ],
  acquisition: 'Defeat 200 Crey Paragon Protectors',
  links: [
    { title: 'Infiltrator Badge', href: 'https://homecoming.wiki/wiki/Infiltrator_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/defeat/infiltrator.png' },
  ],
}
