import { BadgeData } from 'coh-content-db'
import { ReadTheWentworthPamphletOnMrJonesBulletinBoard } from '../../mission/read-the-wentworth-pamphlet-on-mr-jones-bulletin-board'
import { ReadInventionEnhancementInformation } from '../../mission/read-invention-enhancement-information'

export const Inventor: BadgeData = {
  type: 'invention',
  key: 'inventor',
  setTitleId: [732],
  name: 'Inventor',
  releaseDate: '2012-11-30',
  morality: 'all',
  badgeText: 'You have proven your skills as an Inventor at the University.',
  acquisition: 'Awarded for completing the Invention System tutorial mission.',
  links: [
    { title: 'Inventor Badge', href: 'https://homecoming.wiki/wiki/Inventor_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/invention/inventor.png',
  requirements: [
    { key: ReadTheWentworthPamphletOnMrJonesBulletinBoard.key, type: 'mission', missionKey: ReadTheWentworthPamphletOnMrJonesBulletinBoard.key },
    { key: ReadInventionEnhancementInformation.key, type: 'mission', missionKey: ReadInventionEnhancementInformation.key },
  ],
}
