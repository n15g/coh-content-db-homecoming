import { BadgeData } from 'coh-content-db'

export const Ascended: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'ascended',
  setTitle: { id: 1462 },
  name: [
    { value: 'Ascended' },
  ],
  alignment: ['V'],
  badgeText: [
    {
      value: 'Despite your villainous beginnings you managed to redeem yourself. You have shifted your '
        + 'alignment from Villain to Hero earning yourself the Ascended badge.',
    },
  ],
  acquisition: 'Shift alignment from Villain to Hero',
  links: [
    { title: 'Ascended Badge', href: 'https://homecoming.wiki/wiki/Ascended_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/ascended.png' },
  ],
}
