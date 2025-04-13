import { MissionData } from 'coh-content-db'
import { TeamUpTeleporter } from '../contact/team-up-teleporter'

export const LambdaSectorTrial: MissionData = {
  key: 'lambda-sector-trial',
  name: 'Lambda Sector Trial',
  type: 'trial',
  morality: 'primal',
  contactKeys: TeamUpTeleporter.key,
  levelRange: [50],
  links: [
    { title: 'Lambda Sector Trial', href: 'https://homecoming.wiki/wiki/Lambda_Sector_Trial' },
  ],
}
