import { MissionData } from 'coh-content-db'
import { Cleopatra } from '../contact/cleopatra'

export const OrganizedCrusaders: MissionData = {
  key: 'organized-crusaders',
  name: 'Organized Crusaders',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: Cleopatra.key,
  levelRange: [1, 10],
  links: [
    { title: 'Organized Crusaders', href: 'https://homecoming.wiki/wiki/Cleopatra#Organized_Crusaders' },
  ],
  flashback: {
    id: '18.03',
    levelRange: [10, 14],
    morality: 'all',
  },
}
