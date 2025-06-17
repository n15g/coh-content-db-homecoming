import { MissionData } from 'coh-content-db'
import { RobertKogan } from '../contact/robert-kogan'

export const TheSunlightAndTheSpotlight: MissionData = {
  key: 'the-sunlight-and-the-spotlight',
  name: 'The Sunlight and the Spotlight',
  type: 'story-arc',
  morality: 'vigilante',
  contactKeys: RobertKogan.key,
  levelRange: [40, 50],
  links: [
    { title: 'The Sunlight and the Spotlight', href: 'https://homecoming.wiki/wiki/Robert_Kogan#The_Sunlight_and_the_Spotlight' },
  ],
  flashback: {
    id: '28.04',
    levelRange: [50],
  },
}
