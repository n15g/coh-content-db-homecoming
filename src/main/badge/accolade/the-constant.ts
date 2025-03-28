import { BadgeData, mapLink } from 'coh-content-db'
import { EchoAtlasPark } from '../../map/echo-atlas-park'
import { AtlasPark } from '../../map/atlas-park'
import { WalkedDownMemoryLane } from './walked-down-memory-lane'
import { AtlasTourGuide } from './atlas-tour-guide'

export const TheConstant: BadgeData = {
  type: 'ACCOLADE',
  key: 'the-constant',
  setTitle: { id: 2001 },
  name: [
    { value: 'The Constant' },
  ],
  alignment: ['H'],
  badgeText: [
    { value: `Villains, heroes, time travel, trans-dimensional wars...  Come what may, in an ever-changing multiverse, you are The Constant which remains unchanged.` },
  ],
  notes: `Visit all exploration badges in ${mapLink(AtlasPark)} and ${mapLink(EchoAtlasPark)}`,
  links: [
    { title: 'The Constant Badge', href: 'https://homecoming.wiki/wiki/The_Constant_Badge' },
  ],
  icon: [
    { value: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/the-constant.png' },
  ],
  partials: [
    { key: WalkedDownMemoryLane.key, type: 'BADGE', badgeKey: WalkedDownMemoryLane.key },
    { key: AtlasTourGuide.key, type: 'BADGE', badgeKey: AtlasTourGuide.key },
  ],
}
