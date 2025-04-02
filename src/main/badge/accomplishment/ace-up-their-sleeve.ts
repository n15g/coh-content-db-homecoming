import { BadgeData } from 'coh-content-db'
import { ProvostMarchandPrimalEarth } from '../../contact/provost-marchand-primal-earth'

export const AceUpTheirSleeve: BadgeData = {
  type: 'ACCOMPLISHMENT',
  key: 'ace-up-their-sleeve',
  setTitle: { id: 2271 },
  name: 'Ace Up Their Sleeve',
  alignment: ['H'],
  badgeText: `You played the Center's personal story and saw that the Council has another ace up their sleeve for future events.`,
  links: [
    { title: 'Ace Up Their Sleeve Badge', href: 'https://homecoming.wiki/wiki/Ace_Up_Their_Sleeve_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/ace-up-their-sleeve.png',
  requirements: [
    { key: 'gamble', type: 'MISSION', missionName: 'Gamble', contactKey: ProvostMarchandPrimalEarth.key },
  ],
}
