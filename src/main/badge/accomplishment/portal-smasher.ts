import { BadgeData } from 'coh-content-db'
import { DrQuaterfield } from '../../contact/dr-quaterfield'

export const PortalSmasher: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'portal-smasher',
  setTitle: { id: 423 },
  name: 'Portal Smasher',
  alignment: ['H'],
  badgeText: 'You cut off the illegal portals the Nemesis army and Crey had built to access the Shadow Shard, and prevented the Rularuu from escaping into our world.',
  links: [
    { title: 'Portal Smasher Badge', href: 'https://homecoming.wiki/wiki/Portal_Smasher_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/portal-smasher.png',
  requirements: [
    { key: 'dqtf', type: 'TASK_FORCE', missionName: 'Dr. Quaterfield Task Force', contactKey: DrQuaterfield.key },
  ],
}
