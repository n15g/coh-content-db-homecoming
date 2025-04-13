import { BadgeData } from 'coh-content-db'
import { StopTheCircleOfThornsFromContactingAnAlternateWorld } from '../../mission/stop-the-circle-of-thorns-from-contacting-an-alternate-world'

export const Frontline: BadgeData = {
  type: 'accomplishment',
  key: 'frontline',
  setTitleId: [81],
  name: 'Frontline',
  morality: 'heroic',
  badgeText: 'You stopped a battle between the Circle of Thorns and the Oranbegans from another dimension.',
  links: [
    { title: 'Frontline Badge', href: 'https://homecoming.wiki/wiki/Frontline_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/frontline.png',
  requirements: [
    { key: StopTheCircleOfThornsFromContactingAnAlternateWorld.key, type: 'mission', missionKey: StopTheCircleOfThornsFromContactingAnAlternateWorld.key },
  ],
}
