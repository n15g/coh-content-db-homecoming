import { BadgeData, zoneLink } from 'coh-content-db'
import { PraetorDuncan } from '../../contact/praetor-duncan'
import { Ouroboros } from '../../zone/ouroboros'

export const HunterOfSpecters: BadgeData = {
  type: 'accomplishment',
  key: 'hunter-of-specters',
  setTitleId: [2191],
  name: 'Hunter of Specters',
  morality: 'all',
  badgeText: 'You worked together with Praetor Duncan to put an end to Diabolique, who was discovered to be working together with Mot.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a hero or villain can select the "To What End for Power" entry with number 22.16 at level 50.`,
  links: [
    { title: 'Hunter of Specters Badge', href: 'https://homecoming.wiki/wiki/Hunter_of_Specters_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/da-arc.png',
  requirements: [
    { key: 'to-what-end-for-power', type: 'ARC', missionName: 'To What End for Power', contactKey: PraetorDuncan.key },
  ],
}
