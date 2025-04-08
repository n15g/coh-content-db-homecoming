import { BadgeData } from 'coh-content-db'
import { TeamUpTeleporter } from '../../contact/team-up-teleporter'

export const BehaviorAdjuster: BadgeData = {
  type: 'accomplishment',
  key: 'behavior-adjuster',
  setTitleId: [1974],
  name: 'Behavior Adjuster',
  morality: 'all',
  badgeText: 'You have completed the Incarnate Trial: Behavioral Adjustment Facility.',
  links: [
    { title: 'Behavior Adjuster Badge', href: 'https://homecoming.wiki/wiki/Behavior_Adjuster_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/behavior-adjuster.png',
  requirements: [
    { key: 'behavioral-adjustment-facility-trial', type: 'TASK_FORCE', missionName: 'Behavioral Adjustment Facility Trial', contactKey: TeamUpTeleporter.key },
  ],
}
