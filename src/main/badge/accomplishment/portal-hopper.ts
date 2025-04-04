import { BadgeData, zoneLink } from 'coh-content-db'
import { Ouroboros } from '../../zone/ouroboros'
import { TechnicianNaylor } from '../../contact/technician-naylor'

export const PortalHopper: BadgeData = {
  type: 'accomplishment',
  key: 'portal-hopper',
  setTitleId: [343],
  name: 'Portal Hopper',
  morality: 'villainous',
  badgeText: 'Your journeys to other dimensions have earned you the Portal Hopper badge.',
  notes: `To get this badge in ${zoneLink(Ouroboros)}, a villain can select the "Attack Longbow portal base" entry with number 6.64 in the 35-39 level range.`,
  links: [
    { title: 'Portal Hopper Badge', href: 'https://homecoming.wiki/wiki/Portal_Hopper_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/stature-7.png',
  requirements: [
    { key: 'alpb', type: 'MISSION', missionName: 'Attack Longbow Portal Base', contactKey: TechnicianNaylor.key },
  ],
}
