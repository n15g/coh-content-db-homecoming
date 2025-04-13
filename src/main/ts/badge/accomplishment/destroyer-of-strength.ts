import { BadgeData } from 'coh-content-db'
import { SaraMooreTaskForce } from '../../mission/sara-moore-task-force'

export const DestroyerOfStrength: BadgeData = {
  type: 'accomplishment',
  key: 'destroyer-of-strength',
  setTitleId: [424],
  name: 'Destroyer of Strength',
  morality: 'heroic',
  badgeText: 'You defeated the being known as Ruladak the Strong, freeing the people of the Shadow Shard from his tyranny.',
  links: [
    { title: 'Destroyer of Strength Badge', href: 'https://homecoming.wiki/wiki/Destroyer_of_Strength_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/destroyer-of-strength.png',
  requirements: [
    { key: SaraMooreTaskForce.key, type: 'mission', missionKey: SaraMooreTaskForce.key },
  ],
}
