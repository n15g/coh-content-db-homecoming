import { BadgeData } from 'coh-content-db'
import { TeamUpTeleporter } from '../../contact/team-up-teleporter'

export const UndergroundSeeker: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'underground-seeker',
  setTitle: { id: 1995 },
  name: 'Underground Seeker',
  alignment: ['H', 'V', 'P'],
  badgeText: 'You have completed the Incarnate Trial: Underground.',
  links: [
    { title: 'Underground Seeker Badge', href: 'https://homecoming.wiki/wiki/Underground_Seeker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/underground-seeker.png',
  requirements: [
    { key: 'tut', type: 'TASK_FORCE', missionName: 'The Underground Trial', contactKey: TeamUpTeleporter.key },
  ],
}
