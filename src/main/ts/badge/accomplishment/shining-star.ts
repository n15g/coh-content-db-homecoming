import { BadgeData } from 'coh-content-db'
import { TheShiningStarsANewDayDawning } from '../../mission/the-shining-stars-a-new-day-dawning'

export const ShiningStar: BadgeData = {
  type: 'accomplishment',
  key: 'shining-star',
  setTitleId: [2014],
  name: 'Shining Star',
  morality: 'heroic',
  badgeText: 'You and your friends have proven your worth to Manticore, and gained a high-profile benefactor.',
  links: [
    { title: 'Shining Star Badge', href: 'https://homecoming.wiki/wiki/Shining_Star_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/shining-star.png',
  requirements: [
    { key: TheShiningStarsANewDayDawning.key, type: 'mission', missionKey: TheShiningStarsANewDayDawning.key },
  ],
}
