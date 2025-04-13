import { MissionData } from 'coh-content-db'
import { TeamUpTeleporter } from '../contact/team-up-teleporter'

export const CathedralOfPainTrial: MissionData = {
  key: 'cathedral-of-pain-trial',
  name: 'Cathedral of Pain Trial',
  type: 'trial',
  morality: 'all',
  contactKeys: TeamUpTeleporter.key,
  levelRange: [40],
  links: [
    { title: 'Cathedral of Pain Trial', href: 'https://homecoming.wiki/wiki/Cathedral_of_Pain_Trial' },
  ],
}
