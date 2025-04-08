import { BadgeData } from 'coh-content-db'
import { TeamUpTeleporter } from '../../contact/team-up-teleporter'

export const PainKiller: BadgeData = {
  type: 'accomplishment',
  key: 'pain-killer',
  setTitleId: [1599],
  name: 'Pain Killer',
  morality: 'all',
  badgeText: `You've completed the Cathedral of Pain and thwarted the Aspect of Rularuu's plans.`,
  links: [
    { title: 'Pain Killer Badge', href: 'https://homecoming.wiki/wiki/Pain_Killer_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/pain-killer.png',
  requirements: [
    { key: 'copt', type: 'TASK_FORCE', missionName: 'Cathedral of Pain Trial', contactKey: TeamUpTeleporter.key },
  ],
}
