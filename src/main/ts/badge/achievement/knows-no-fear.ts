import { BadgeData, contactLink } from 'coh-content-db'
import { SisterSolaris } from '../../contact/sister-solaris'

export const KnowsNoFear: BadgeData = {
  type: 'achievement',
  key: 'knows-no-fear',
  setTitleId: [2201],
  name: 'Knows No Fear',
  morality: 'all',
  badgeText: 'You chose to fight against Romulus and his army of Talons by yourself, showing that you know no fear.',
  acquisition: `Refuse help from the Cimerorans in the final mission from ${contactLink(SisterSolaris)}.`,
  links: [
    { title: 'Knows No Fear Badge', href: 'https://homecoming.wiki/wiki/Knows_No_Fear_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/achievement/da-zone.png',
}
