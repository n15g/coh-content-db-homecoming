import { BadgeData } from 'coh-content-db'
import { TeamUpTeleporter } from '../../contact/team-up-teleporter'

export const DeathDenied: BadgeData = {
  type: 'accomplishment',
  key: 'death-denied',
  setTitleId: [2163],
  name: 'Death Denied',
  morality: 'all',
  badgeText: 'You have completed the Incarnate Trial: Dilemma Diabolique.',
  links: [
    { title: 'Death Denied Badge', href: 'https://homecoming.wiki/wiki/Death_Denied_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/death-denied.png',
  requirements: [
    { key: 'dilemma-diabolique-trial', type: 'TASK_FORCE', missionName: 'Dilemma Diabolique Trial', contactKey: TeamUpTeleporter.key },
  ],
}
