import { MissionData } from 'coh-content-db'
import { KellyNemmers } from '../contact/kelly-nemmers'

export const HatredsHungryHeart: MissionData = {
  key: 'hatreds-hungry-heart',
  name: `Hatred's Hungry Heart`,
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: KellyNemmers.key,
  levelRange: [30, 34],
  links: [
    { title: `Hatred's Hungry Heart`, href: `https://homecoming.wiki/wiki/Kelly_Nemmers#Hatred's_Hungry_Heart_(30-34)` },
  ],
  flashback: {
    id: '5.03',
    levelRange: [30, 34],
  },
}
