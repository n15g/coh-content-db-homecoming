import { BadgeData } from 'coh-content-db'
import { AdmiralSutterTaskForce } from '../../mission/admiral-sutter-task-force'

export const LandSeaAir: BadgeData = {
  type: 'accomplishment',
  key: 'land-sea-air',
  setTitleId: [1981],
  name: 'Land, Sea & Air',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: 'You shut down the alliance between the Sky Raiders and the Praetorian Imperial Defense Force, halting an assault on Skyway City in the process.',
  acquisition: 'Complete the Admiral Sutter Task Force.',
  links: [
    { title: 'Land, Sea & Air Badge', href: 'https://homecoming.wiki/wiki/Land%2C_Sea_%26_Air_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/land-sea-air.png',
  requirements: [
    { key: AdmiralSutterTaskForce.key, type: 'mission', missionKey: AdmiralSutterTaskForce.key },
  ],
}
