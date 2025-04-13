import { MissionData } from 'coh-content-db'
import { MageKillerTatiana } from '../contact/mage-killer-tatiana'

export const TheLastWitchOfStriga: MissionData = {
  key: 'the-last-witch-of-striga',
  name: 'The Last Witch of Striga',
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: MageKillerTatiana.key,
  levelRange: [25, 29],
  links: [
    { title: 'The Last Witch of Striga', href: 'https://homecoming.wiki/wiki/Mage-Killer_Tatiana#The_Last_Witch_of_Striga' },
  ],
  flashback: {
    id: '27.94',
    levelRange: [25, 29],
  },
}
