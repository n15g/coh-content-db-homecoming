import { MissionData } from 'coh-content-db'
import { BlackScorpion } from '../contact/black-scorpion'

export const ChinkInTheArmor: MissionData = {
  key: 'chink-in-the-armor',
  name: 'Chink in the Armor',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: BlackScorpion.key,
  levelRange: [35],
  links: [
    { title: 'Chink in the Armor', href: 'https://homecoming.wiki/wiki/Black_Scorpion#Chink_in_the_Armor' },
  ],
  flashback: {
    id: '7.39',
    levelRange: [50],
  },
}
