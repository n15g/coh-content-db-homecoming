import { BadgeData } from 'coh-content-db'
import { PriceOfFriendship } from '../../mission/price-of-friendship'

export const FreedomCracker: BadgeData = {
  type: 'accomplishment',
  key: 'freedom-cracker',
  setTitleId: [2013],
  name: 'Freedom Cracker',
  morality: 'villainous',
  badgeText: `You've kicked Longbow out of Fort Darwin, showing them that they don't belong in the Rogue Isles!`,
  links: [
    { title: 'Freedom Cracker Badge', href: 'https://homecoming.wiki/wiki/Freedom_Cracker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/freedom-cracker.png',
  requirements: [
    { key: PriceOfFriendship.key, type: 'mission', missionKey: PriceOfFriendship.key },
  ],
}
