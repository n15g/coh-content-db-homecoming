import { BadgeData } from 'coh-content-db'
import { GoneInAFlash } from '../../mission/gone-in-a-flash'

export const DiamondInTheRough: BadgeData = {
  type: 'achievement',
  key: 'diamond-in-the-rough',
  setTitleId: [2419],
  name: 'Diamond in the Rough',
  releaseDate: '2019-06-01',
  morality: 'villainous',
  badgeText: 'Finding the Florentine Diamond was not as quick or simple as it first seemed.',
  links: [
    { title: 'Diamond in the Rough Badge', href: 'https://homecoming.wiki/wiki/Diamond_in_the_Rough_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/diamond-in-the-rough.png',
  requirements: [
    { key: GoneInAFlash.key, type: 'mission', missionKey: GoneInAFlash.key },
  ],
}
