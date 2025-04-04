import { BadgeData } from 'coh-content-db'

export const Ascended: BadgeData = {
  type: 'achievement',
  key: 'ascended',
  setTitleId: [1462],
  name: 'Ascended',
  morality: 'villainous',
  badgeText: 'Despite your villainous beginnings you managed to redeem yourself. You have shifted your alignment from Villain to Hero earning yourself the Ascended badge.',
  acquisition: 'Shift alignment from Villain to Hero.',
  links: [
    { title: 'Ascended Badge', href: 'https://homecoming.wiki/wiki/Ascended_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/ascended.png',
}
