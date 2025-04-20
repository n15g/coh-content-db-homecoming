import { BadgeData } from 'coh-content-db'
import { Gamble } from '../../mission/gamble'

export const AceUpTheirSleeve: BadgeData = {
  type: 'accomplishment',
  key: 'ace-up-their-sleeve',
  setTitleId: [2271],
  name: 'Ace Up Their Sleeve',
  releaseDate: '2012-11-30',
  morality: 'heroic',
  badgeText: `You played the Center's personal story and saw that the Council has another ace up their sleeve for future events.`,
  links: [
    { title: 'Ace Up Their Sleeve Badge', href: 'https://homecoming.wiki/wiki/Ace_Up_Their_Sleeve_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/ace-up-their-sleeve.png',
  requirements: [
    { key: Gamble.key, type: 'mission', missionKey: Gamble.key },
  ],
}
