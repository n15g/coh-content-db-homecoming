import { MissionData } from 'coh-content-db'
import { OberstStraxt } from '../contact/oberst-straxt'

export const BuriedSecrets: MissionData = {
  key: 'buried-secrets',
  name: 'Buried Secrets',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: OberstStraxt.key,
  levelRange: [20, 24],
  links: [
    { title: 'Buried Secrets', href: 'https://homecoming.wiki/wiki/Oberst_Straxt#Buried_Secrets_(20-24)' },
  ],
  flashback: {
    id: '27.09',
    levelRange: [20, 24],
  },
}
