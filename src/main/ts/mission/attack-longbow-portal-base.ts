import { MissionData } from 'coh-content-db'
import { TechnicianNaylor } from '../contact/technician-naylor'

export const AttackLongbowPortalBase: MissionData = {
  key: 'attack-longbow-portal-base',
  name: 'Attack Longbow portal base',
  type: 'mission',
  morality: 'villainous',
  contactKeys: TechnicianNaylor.key,
  levelRange: [35, 39],
  links: [
    { title: 'Attack Longbow portal base', href: 'https://homecoming.wiki/wiki/Technician_Naylor#Attack_Longbow_portal_base.' },
  ],
  flashback: {
    id: '6.64',
    levelRange: [35, 39],
  },
}
