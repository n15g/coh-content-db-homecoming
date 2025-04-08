import { MissionData } from 'coh-content-db'
import { MariaJenkins } from '../contact/maria-jenkins'

export const TakeDownNightstar: MissionData = {
  key: 'take-down-nightstar',
  name: 'Take down Nightstar',
  type: 'mission',
  morality: 'heroic',
  contactKeys: MariaJenkins.key,
  levelRange: [45, 50],
  links: [{ title: 'Take down Nightstar', href: 'https://homecoming.wiki/wiki/Maria_Jenkins#Take_down_Nightstar' }],
}
