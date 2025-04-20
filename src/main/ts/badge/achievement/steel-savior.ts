import { BadgeData, contactLink } from 'coh-content-db'
import { LauraLockhart } from '../../contact/laura-lockhart'

export const SteelSavior: BadgeData = {
  type: 'achievement',
  key: 'steel-savior',
  setTitleId: [2097],
  name: 'Steel Savior',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You have gone above and beyond the call of duty and prevented Steel Canyon from turning into a war zone.',
  acquisition: `Defeat all the enemies at the end of ${contactLink(LauraLockhart)}'s second mission in less than 3:00.`,
  links: [
    { title: 'Steel Savior Badge', href: 'https://homecoming.wiki/wiki/Steel_Savior_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/steel-savior.png',
}
