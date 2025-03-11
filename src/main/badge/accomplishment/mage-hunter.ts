import { BadgeData } from 'coh-content-db'

export const MageHunter: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'mage-hunter',
  setTitle: { id: 345 },
  name: [
    { value: 'Mage Hunter' },
  ],
  alignment: ['V'],
  badgeText: [
    { value: 'That\'s one less creepy mystic to get in your way.' },
  ],
  acquisition: 'Complete the Defeat Selestar mission from Mage-Killer Zuhkara',
  links: [
    { title: 'Mage Hunter Badge', href: 'https://homecoming.wiki/wiki/Mage_Hunter_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-8.png' },
  ],
}
