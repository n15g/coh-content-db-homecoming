import { MissionData } from 'coh-content-db'
import { MaxwellChristopher } from '../contact/maxwell-christopher'

export const NemesisRex: MissionData = {
  key: 'nemesis-rex',
  name: 'Nemesis Rex',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: MaxwellChristopher.key,
  levelRange: [40, 45],
  links: [
    { title: 'Nemesis Rex', href: 'https://homecoming.wiki/wiki/Maxwell_Christopher#Nemesis_Rex' },
  ],
  flashback: {
    id: '1.07',
    levelRange: [40, 49],
  },
}
