import { BadgeData } from 'coh-content-db'
import { TeamUpTeleporter } from '../../contact/team-up-teleporter'

export const SiblingRivalry: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'sibling-rivalry',
  setTitle: { id: 2175 },
  name: 'Sibling Rivalry',
  alignment: ['H', 'V', 'P'],
  badgeText: 'You have completed the Challenge Trial: Drowning in Blood.',
  links: [
    { title: 'Sibling Rivalry Badge', href: 'https://homecoming.wiki/wiki/Sibling_Rivalry_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/sibling-rivalry.png',
  requirements: [
    { key: 'dib', type: 'TASK_FORCE', missionName: 'Drowning in Blood', contactKey: TeamUpTeleporter.key },
  ],
}
