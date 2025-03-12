import { BadgeData } from 'coh-content-db'

export const SteelSavior: BadgeData = {
  type: 'ACHIEVEMENT',
  key: 'steel-savior',
  setTitle: { id: 2097 },
  name: [
    { value: 'Steel Savior' },
  ],
  alignment: ['H'],
  badgeText: [
    {
      value: 'You have gone above and beyond the call of duty and prevented Steel Canyon from turning into a '
        + 'war zone.',
    },
  ],
  acquisition: 'Defeat all the enemies at the end of Laura Lockhart\'s second mission in less than 3:00',
  links: [
    { title: 'Steel Savior Badge', href: 'https://homecoming.wiki/wiki/Steel_Savior_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/steel-savior.png' },
  ],
}
