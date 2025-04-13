import { MissionData } from 'coh-content-db'
import { Karsis } from '../contact/karsis'

export const CavernOfTranscendenceTrial: MissionData = {
  key: 'cavern-of-transcendence-trial',
  name: 'Cavern of Transcendence Trial',
  type: 'trial',
  morality: 'heroic',
  contactKeys: Karsis.key,
  levelRange: [12, 15],
  links: [
    { title: 'Cavern of Transcendence Trial', href: 'https://homecoming.wiki/wiki/Cavern_of_Transcendence_Trial' },
  ],
}
