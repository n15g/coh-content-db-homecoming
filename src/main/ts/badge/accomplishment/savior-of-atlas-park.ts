import { BadgeData } from 'coh-content-db'
import { ReasonToFight } from '../../mission/reason-to-fight'

export const SaviorOfAtlasPark: BadgeData = {
  type: 'accomplishment',
  key: 'savior-of-atlas-park',
  setTitleId: [2012],
  name: 'Savior of Atlas Park',
  morality: 'heroic',
  badgeText: `You've saved Atlas Park from the Arachnos invasion!`,
  links: [
    { title: 'Savior of Atlas Park Badge', href: 'https://homecoming.wiki/wiki/Savior_of_Atlas_Park_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/savior-of-atlas-park.png',
  requirements: [
    { key: ReasonToFight.key, type: 'mission', missionKey: ReasonToFight.key },
  ],
}
