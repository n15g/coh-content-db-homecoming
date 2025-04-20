import { BadgeData } from 'coh-content-db'
import { WalkedDownMemoryLane } from './walked-down-memory-lane'
import { AtlasTourGuide } from './atlas-tour-guide'

export const TheConstant: BadgeData = {
  type: 'accolade',
  key: 'the-constant',
  setTitleId: [2001],
  name: 'The Constant',
  releaseDate: '2019-01-01',
  morality: 'heroic',
  badgeText: `Villains, heroes, time travel, trans-dimensional wars... Come what may, in an ever-changing multiverse, you are The Constant which remains unchanged.`,
  links: [
    { title: 'The Constant Badge', href: 'https://homecoming.wiki/wiki/The_Constant_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accolade/the-constant.png',
  requirements: [
    { key: WalkedDownMemoryLane.key, type: 'badge', badgeKey: WalkedDownMemoryLane.key },
    { key: AtlasTourGuide.key, type: 'badge', badgeKey: AtlasTourGuide.key },
  ],
}
