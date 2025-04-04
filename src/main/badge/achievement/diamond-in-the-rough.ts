import { BadgeData, zoneLink } from 'coh-content-db'
import { BobbyCurtin } from '../../contact/bobby-curtin'
import { Ouroboros } from '../../zone/ouroboros'

export const DiamondInTheRough: BadgeData = {
  type: 'achievement',
  key: 'diamond-in-the-rough',
  setTitleId: [2419],
  name: 'Diamond in the Rough',
  morality: 'villainous',
  badgeText: 'Finding the Florentine Diamond was not as quick or simple as it first seemed.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a rogue can select the "Gone in a Flash" entry with number 26.02 at level 25-29.`,
  links: [
    { title: 'Diamond in the Rough Badge', href: 'https://homecoming.wiki/wiki/Diamond_in_the_Rough_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/diamond-in-the-rough.png',
  requirements: [
    { key: 'giaf', type: 'ARC', missionName: 'Gone in a Flash', contactKey: BobbyCurtin.key },
  ],
}
