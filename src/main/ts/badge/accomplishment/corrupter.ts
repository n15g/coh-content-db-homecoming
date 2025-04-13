import { BadgeData } from 'coh-content-db'
import { RescueTheOGaffneyLawFirmFromTheCircleOfThorns } from '../../mission/rescue-the-ogaffney-law-firm-from-the-circle-of-thorns'

export const Corrupter: BadgeData = {
  type: 'accomplishment',
  key: 'corrupter',
  setTitleId: [78],
  name: 'Corrupter',
  morality: 'heroic',
  badgeText: 'You prevented a non-aggression pact between the Circle of Thorns and Nemesis.',
  links: [
    { title: 'Corrupter Badge', href: 'https://homecoming.wiki/wiki/Corrupter_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/corrupter.png',
  requirements: [
    { key: RescueTheOGaffneyLawFirmFromTheCircleOfThorns.key, type: 'mission', missionKey: RescueTheOGaffneyLawFirmFromTheCircleOfThorns.key },
  ],
}
