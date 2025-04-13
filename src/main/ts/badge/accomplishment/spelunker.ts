import { BadgeData } from 'coh-content-db'
import { RescueFortuneTellerFromTheCircleOfThorns } from '../../mission/rescue-fortune-teller-from-the-circle-of-thorns'

export const Spelunker: BadgeData = {
  type: 'accomplishment',
  key: 'spelunker',
  setTitleId: [72],
  name: 'Spelunker',
  morality: 'heroic',
  badgeText: 'You have freed a local fortune teller from the clutches of the Circle of Thorns.',
  links: [
    { title: 'Spelunker Badge', href: 'https://homecoming.wiki/wiki/Spelunker_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/spelunker.png',
  requirements: [
    { key: RescueFortuneTellerFromTheCircleOfThorns.key, type: 'mission', missionKey: RescueFortuneTellerFromTheCircleOfThorns.key },
  ],
}
