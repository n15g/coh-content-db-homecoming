import { MissionData } from 'coh-content-db'
import { Vagabond } from '../contact/vagabond'

export const ThePriceGoodMenMustPay: MissionData = {
  key: 'the-price-good-men-must-pay',
  name: 'The Price Good Men Must Pay',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: Vagabond.key,
  levelRange: [8, 15],
  links: [
    { title: 'The Price Good Men Must Pay', href: 'https://homecoming.wiki/wiki/Vagabond#The_Price_Good_Men_Must_Pay' },
  ],
  flashback: {
    id: '18.29',
    levelRange: [15, 19],
    morality: 'all',
  },
}
