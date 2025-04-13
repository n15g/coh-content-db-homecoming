import { MissionData } from 'coh-content-db'
import { BelladonnaVetrano } from '../contact/belladonna-vetrano'

export const TheEmperorsSword: MissionData = {
  key: 'the-emperors-sword',
  name: `The Emperor's Sword`,
  type: 'story-arc',
  morality: 'primal',
  contactKeys: BelladonnaVetrano.key,
  levelRange: [50],
  links: [
    { title: `The Emperor's Sword`, href: `https://homecoming.wiki/wiki/Belladonna_Vetrano_(Contact)#The_Emperor's_Sword_(50_Incarnate)` },
  ],
  flashback: {
    id: '23.06',
    levelRange: [50],
  },
}
