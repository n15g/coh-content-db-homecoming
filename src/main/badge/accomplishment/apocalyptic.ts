import { BadgeData } from 'coh-content-db'
import { TheLadyGrey } from '../../contact/the-lady-grey'

export const Apocalyptic: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'apocalyptic',
  setTitle: { id: 837 },
  name: 'Apocalyptic',
  alignment: ['H', 'V', 'P'],
  badgeText: 'You have defeated the Riktified Hero 1 and fought back the Rikti invasion for the time being.',
  links: [
    { title: 'Apocalyptic Badge', href: 'https://homecoming.wiki/wiki/Apocalyptic_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/apocalyptic.png',
  requirements: [
    { key: 'the-lady-grey-task-force', type: 'TASK_FORCE', missionName: 'The Lady Grey Task Force', contactKey: TheLadyGrey.key },
  ],
}
