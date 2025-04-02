import { BadgeData } from 'coh-content-db'
import { SaraMoore } from '../../contact/sara-moore'

export const DestroyerOfStrength: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'destroyer-of-strength',
  setTitle: { id: 424 },
  name: 'Destroyer of Strength',
  alignment: ['H'],
  badgeText: 'You defeated the being known as Ruladak the Strong, freeing the people of the Shadow Shard from his tyranny.',
  links: [
    { title: 'Destroyer of Strength Badge', href: 'https://homecoming.wiki/wiki/Destroyer_of_Strength_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/destroyer-of-strength.png',
  requirements: [
    { key: 'sara-moore-task-force', type: 'TASK_FORCE', missionName: 'Sara Moore Task Force', contactKey: SaraMoore.key },
  ],
}
