import { MissionData } from 'coh-content-db'
import { TeamUpTeleporter } from '../contact/team-up-teleporter'

export const DrowningInBlood: MissionData = {
  key: 'drowning-in-blood',
  name: 'Drowning in Blood',
  type: 'trial',
  morality: 'all',
  contactKeys: TeamUpTeleporter.key,
  levelRange: [15],
  links: [
    { title: 'Drowning in Blood', href: 'https://homecoming.wiki/wiki/Drowning_in_Blood' },
  ],
}
