import { MissionData } from 'coh-content-db'
import { TeamUpTeleporter } from '../contact/team-up-teleporter'

export const DeathFromBelow: MissionData = {
  key: 'death-from-below',
  name: 'Death from Below',
  type: 'trial',
  morality: 'primal',
  contactKeys: TeamUpTeleporter.key,
  levelRange: [1, 6],
  links: [
    { title: 'Death from Below', href: 'https://homecoming.wiki/wiki/Death_from_Below' },
  ],
}
