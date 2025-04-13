import { MissionData } from 'coh-content-db'
import { BlackScorpion } from '../contact/black-scorpion'

export const TheDestinyRaids: MissionData = {
  key: 'the-destiny-raids',
  name: 'The Destiny Raids',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: BlackScorpion.key,
  levelRange: [45],
  links: [
    { title: 'The Destiny Raids', href: 'https://homecoming.wiki/wiki/Black_Scorpion#The_Destiny_Raids' },
  ],
  flashback: {
    id: '7.40',
    levelRange: [50],
  },
}
