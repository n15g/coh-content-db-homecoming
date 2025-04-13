import { MissionData } from 'coh-content-db'
import { TeamUpTeleporter } from '../contact/team-up-teleporter'

export const TheUndergroundTrial: MissionData = {
  key: 'the-underground-trial',
  name: 'The Underground Trial',
  type: 'trial',
  morality: 'primal',
  contactKeys: TeamUpTeleporter.key,
  levelRange: [50],
  links: [
    { title: 'The Underground Trial', href: 'https://homecoming.wiki/wiki/The_Underground_Trial' },
  ],
}
