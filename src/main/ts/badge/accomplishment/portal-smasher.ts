import { BadgeData } from 'coh-content-db'
import { DrQuaterfieldTaskForce } from '../../mission/dr-quaterfield-task-force'

export const PortalSmasher: BadgeData = {
  type: 'accomplishment',
  key: 'portal-smasher',
  setTitleId: [423],
  name: 'Portal Smasher',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You cut off the illegal portals the Nemesis army and Crey had built to access the Shadow Shard, and prevented the Rularuu from escaping into our world.',
  links: [
    { title: 'Portal Smasher Badge', href: 'https://homecoming.wiki/wiki/Portal_Smasher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/portal-smasher.png',
  requirements: [
    { key: DrQuaterfieldTaskForce.key, type: 'mission', missionKey: DrQuaterfieldTaskForce.key },
  ],
}
