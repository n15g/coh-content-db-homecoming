import { BadgeData } from 'coh-content-db'

export const SkullBuster: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'skull-buster',
  setTitle: { id: 2316 },
  name: [
    { value: 'Skull Buster' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You formed the New Regulators and put a stop to the Skulls\' Superadine Ring in Kings Row. You '
        + 'destroyed their lab and put one of The Petrovic Brothers behind bars, leaving the Skulls '
        + 'scattered and weakened.',
    },
  ],
  acquisition: 'Complete the story arc from Eagle Eye',
  links: [
    { title: 'Skull Buster Badge', href: 'https://homecoming.wiki/wiki/Skull_Buster_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/skull-buster.png' },
  ],
}
