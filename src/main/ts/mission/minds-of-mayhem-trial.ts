import { MissionData } from 'coh-content-db'
import { TeamUpTeleporter } from '../contact/team-up-teleporter'

export const MindsOfMayhemTrial: MissionData = {
  key: 'minds-of-mayhem-trial',
  name: 'Minds of Mayhem Trial',
  type: 'trial',
  morality: 'primal',
  contactKeys: TeamUpTeleporter.key,
  levelRange: [50],
  links: [
    { title: 'Minds of Mayhem Trial', href: 'https://homecoming.wiki/wiki/Minds_of_Mayhem_Trial' },
  ],
}
