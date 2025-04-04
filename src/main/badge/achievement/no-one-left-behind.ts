import { BadgeData, contactLink } from 'coh-content-db'
import { RoyCooling } from '../../contact/roy-cooling'

export const NoOneLeftBehind: BadgeData = {
  type: 'achievement',
  key: 'no-one-left-behind',
  setTitleId: [1895],
  name: 'No One Left Behind',
  morality: 'heroic',
  badgeText: `You helped saved the injured Rogue PPD from being killed in a burning building, showing that you're willing to lend a helping hand even to your enemies.`,
  acquisition: `Save all the Rogue PPD in the hero story arc from ${contactLink(RoyCooling)}.`,
  links: [
    { title: 'No One Left Behind Badge', href: 'https://homecoming.wiki/wiki/No_One_Left_Behind_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/no-one-left-behind.png',
}
