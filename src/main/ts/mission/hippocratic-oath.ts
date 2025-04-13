import { MissionData } from 'coh-content-db'
import { StevenSheridan } from '../contact/steven-sheridan'

export const HippocraticOath: MissionData = {
  key: 'hippocratic-oath',
  name: 'Hippocratic Oath',
  type: 'personal-story',
  morality: 'heroic',
  contactKeys: StevenSheridan.key,
  levelRange: [35, 39],
  links: [
    { title: 'Hippocratic Oath', href: 'https://homecoming.wiki/wiki/Steven_Sheridan#Hippocratic_Oath_(35-39)' },
  ],
  flashback: {
    id: '0.35',
    levelRange: [35, 39],
  },
}
