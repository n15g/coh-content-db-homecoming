import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { LtHarris } from '../../contact/lt-harris'

export const FreedomCracker: BadgeData = {
  type: 'accomplishment',
  key: 'freedom-cracker',
  setTitleId: [2013],
  name: 'Freedom Cracker',
  morality: 'villainous',
  badgeText: `You've kicked Longbow out of Fort Darwin, showing them that they don't belong in the Rogue Isles!`,
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Price of Friendship" entry with number 21.08 in the 1-9 level range.`,
  links: [
    { title: 'Freedom Cracker Badge', href: 'https://homecoming.wiki/wiki/Freedom_Cracker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/freedom-cracker.png',
  requirements: [
    { key: 'price-of-friendship', type: 'ARC', missionName: 'Price of Friendship', contactKey: LtHarris.key },
  ],
}
