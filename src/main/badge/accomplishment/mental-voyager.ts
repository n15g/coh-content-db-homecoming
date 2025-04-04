import { BadgeData } from 'coh-content-db'
import { TeamUpTeleporter } from '../../contact/team-up-teleporter'

export const MentalVoyager: BadgeData = {
  type: 'accomplishment',
  key: 'mental-voyager',
  setTitleId: [2078],
  name: 'Mental Voyager',
  morality: 'all',
  badgeText: 'You have completed the Incarnate Trial: The Minds of Mayhem.',
  links: [
    { title: 'Mental Voyager Badge', href: 'https://homecoming.wiki/wiki/Mental_Voyager_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/mental-voyager.png',
  requirements: [
    { key: 'minds-of-mayhem-trial', type: 'TASK_FORCE', missionName: 'Minds of Mayhem Trial', contactKey: TeamUpTeleporter.key },
  ],
}
