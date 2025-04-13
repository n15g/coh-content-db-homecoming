import { BadgeData } from 'coh-content-db'
import { BadPeopleGoodIntentions } from '../../mission/bad-people-good-intentions'

export const HelpingHand: BadgeData = {
  type: 'accomplishment',
  key: 'helping-hand',
  setTitleId: [1893],
  name: 'Helping Hand',
  morality: 'heroic',
  badgeText: `You've helped to solve the Medi-Porter crisis in Paragon and get the devices distributed to those who need them.`,
  links: [
    { title: 'Helping Hand Badge', href: 'https://homecoming.wiki/wiki/Helping_Hand_Badge' },
  ],
  icon: 'https://n15g.github.io/coh-content-db-homecoming/images/badges/accomplishment/helping-hand.png',
  requirements: [
    { key: BadPeopleGoodIntentions.key, type: 'mission', missionKey: BadPeopleGoodIntentions.key },
  ],
}
