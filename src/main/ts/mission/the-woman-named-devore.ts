import { MissionData } from 'coh-content-db'
import { MotherMayhem } from '../contact/mother-mayhem'

export const TheWomanNamedDeVore: MissionData = {
  key: 'the-woman-named-devore',
  name: 'The Woman Named DeVore',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: MotherMayhem.key,
  levelRange: [14, 20],
  links: [
    { title: 'The Woman Named DeVore', href: 'https://homecoming.wiki/wiki/Mother_Mayhem#The_Woman_Named_DeVore' },
  ],
  flashback: {
    id: '18.38',
    levelRange: [20, 24],
    morality: 'all',
  },
}
