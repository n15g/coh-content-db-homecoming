import { BadgeData } from 'coh-content-db'
import { TeamUpTeleporter } from '../../contact/team-up-teleporter'

export const KeyesTechnician: BadgeData = {
  type: 'accomplishment',
  key: 'keyes-technician',
  setTitleId: [1989],
  name: 'Keyes Technician',
  morality: 'all',
  badgeText: 'You have completed the Incarnate Trial: Keyes Island Reactor.',
  links: [
    { title: 'Keyes Technician Badge', href: 'https://homecoming.wiki/wiki/Keyes_Technician_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/keyes-technician.png',
  requirements: [
    { key: 'keyes-island-reactor-trial', type: 'TASK_FORCE', missionName: 'Keyes Island Reactor Trial', contactKey: TeamUpTeleporter.key },
  ],
}
