import { BadgeData } from 'coh-content-db'
import { TeamUpTeleporter } from '../../contact/team-up-teleporter'

export const LambdaLeader: BadgeData = {
  type: 'accomplishment',
  key: 'lambda-leader',
  setTitleId: [1983],
  name: 'Lambda Leader',
  morality: 'all',
  badgeText: 'You have completed the Incarnate Trial: Lambda Sector.',
  links: [
    { title: 'Lambda Leader Badge', href: 'https://homecoming.wiki/wiki/Lambda_Leader_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/lambda-leader.png',
  requirements: [
    { key: 'lambda-sector-incarnate-trial', type: 'TASK_FORCE', missionName: 'Lambda Sector Incarnate Trial', contactKey: TeamUpTeleporter.key },
  ],
}
