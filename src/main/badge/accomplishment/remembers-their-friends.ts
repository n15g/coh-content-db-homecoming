import { BadgeData, contactLink, zoneLink } from 'coh-content-db'
import { MrGPrimal } from '../../contact/mr-g-primal'
import { VincentRoss } from '../../contact/vincent-ross'
import { Ouroboros } from '../../zone/ouroboros'

export const RemembersTheirFriends: BadgeData = {
  type: 'accomplishment',
  key: 'remembers-their-friends',
  setTitleId: [2268],
  name: 'Remembers Their Friends',
  morality: 'villainous',
  badgeText: 'Vincent Ross was kidnapped by the Family after they found out he had past dealings with you. However, you beat the Family down and rescued Vincent Ross, showing the Rogue Isles that you remember your friends.',
  acquisition: `Rescue ${contactLink(VincentRoss)} in the "All in the Family" mission from ${contactLink(MrGPrimal)}.`,
  notes: `${contactLink(VincentRoss)} will only be present if you have previously completed his story arc.

To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Sweeps Week: HeroName vs the Rogue Isles" entry with number 24.12 at level 50.`,
  links: [
    { title: 'Remembers Their Friends Badge', href: 'https://homecoming.wiki/wiki/Remembers_Their_Friends_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/st-martial-challenge.png',
  requirements: [
    { key: 'aitf', type: 'MISSION', missionName: 'All in the Family', contactKey: MrGPrimal.key, links: [{ title: 'All in the Family', href: 'https://homecoming.wiki/wiki/Mr._G_(Primal_Earth)#Part_Four:_All_in_the_Family' }] },
  ],
}
