import { MissionData } from 'coh-content-db'
import { SerpentDrummer } from '../contact/serpent-drummer'

export const DreamsOfPeaceAndActsOfWar: MissionData = {
  key: 'dreams-of-peace-and-acts-of-war',
  name: 'Dreams of Peace and Acts of War',
  type: 'story-arc',
  morality: 'primal',
  contactKeys: SerpentDrummer.key,
  levelRange: [40],
  links: [
    { title: 'Dreams of Peace and Acts of War', href: 'https://homecoming.wiki/wiki/Serpent_Drummer#Dreams_of_Peace_and_Acts_of_War_(40-50)' },
  ],
  flashback: {
    id: '10.03',
    levelRange: [50],
  },
}
