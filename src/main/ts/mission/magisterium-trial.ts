import { MissionData } from 'coh-content-db'
import { TeamUpTeleporter } from '../contact/team-up-teleporter'

export const MagisteriumTrial: MissionData = {
  key: 'magisterium-trial',
  name: 'Magisterium Trial',
  type: 'trial',
  morality: 'primal',
  contactKeys: TeamUpTeleporter.key,
  levelRange: [50],
  links: [
    { title: 'Magisterium Trial', href: 'https://homecoming.wiki/wiki/Magisterium_Trial' },
  ],
}
