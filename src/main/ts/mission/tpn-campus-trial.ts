import { MissionData } from 'coh-content-db'
import { TeamUpTeleporter } from '../contact/team-up-teleporter'

export const TPNCampusTrial: MissionData = {
  key: 'tpn-campus-trial',
  name: 'TPN Campus Trial',
  type: 'trial',
  morality: 'primal',
  contactKeys: TeamUpTeleporter.key,
  levelRange: [50],
  links: [
    { title: 'TPN Campus Trial', href: 'https://homecoming.wiki/wiki/TPN_Campus_Trial' },
  ],
}
