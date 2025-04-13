import { MissionData } from 'coh-content-db'
import { InsideInformation } from '../contact/inside-information'

export const PraetoriasHiddenTreasure: MissionData = {
  key: 'praetorias-hidden-treasure',
  name: `Praetoria's Hidden Treasure`,
  type: 'story-arc',
  morality: 'villainous',
  contactKeys: InsideInformation.key,
  levelRange: [30],
  links: [
    { title: `Praetoria's Hidden Treasure`, href: `https://homecoming.wiki/wiki/Inside_Information#Praetoria's_Hidden_Treasure` },
  ],
  flashback: {
    id: '24.10',
    levelRange: [50],
  },
}
