import { BadgeData } from 'coh-content-db'
import { TeamUpTeleporter } from '../../contact/team-up-teleporter'

export const EnemyOfTheState: BadgeData = {
  type: 'accomplishment',
  key: 'enemy-of-the-state',
  setTitleId: [2220],
  name: 'Enemy of the State',
  morality: 'all',
  badgeText: 'You have completed the Incarnate Trial: Magisterium.',
  links: [
    { title: 'Enemy of the State Badge', href: 'https://homecoming.wiki/wiki/Enemy_of_the_State_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/enemy-of-the-state.png',
  requirements: [
    { key: 'magisterium-trial', type: 'TASK_FORCE', missionName: 'Magisterium Trial', contactKey: TeamUpTeleporter.key },
  ],
}
