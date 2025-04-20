import { BadgeData } from 'coh-content-db'
import { TheLadyGreyTaskForce } from '../../mission/the-lady-grey-task-force'

export const Apocalyptic: BadgeData = {
  type: 'accomplishment',
  key: 'apocalyptic',
  setTitleId: [837],
  name: 'Apocalyptic',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have defeated the Riktified Hero 1 and fought back the Rikti invasion for the time being.',
  links: [
    { title: 'Apocalyptic Badge', href: 'https://homecoming.wiki/wiki/Apocalyptic_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/apocalyptic.png',
  requirements: [
    { key: TheLadyGreyTaskForce.key, type: 'mission', missionKey: TheLadyGreyTaskForce.key },
  ],
}
