import { BadgeData } from 'coh-content-db'
import { AttackLongbowPortalBase } from '../../mission/attack-longbow-portal-base'

export const PortalHopper: BadgeData = {
  type: 'accomplishment',
  key: 'portal-hopper',
  setTitleId: [343],
  name: 'Portal Hopper',
  morality: 'villainous',
  badgeText: 'Your journeys to other dimensions have earned you the Portal Hopper badge.',
  links: [
    { title: 'Portal Hopper Badge', href: 'https://homecoming.wiki/wiki/Portal_Hopper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-7.png',
  requirements: [
    { key: AttackLongbowPortalBase.key, type: 'mission', missionKey: AttackLongbowPortalBase.key },
  ],
}
