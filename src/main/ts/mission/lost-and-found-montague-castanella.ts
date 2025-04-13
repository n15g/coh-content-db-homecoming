import { MissionData } from 'coh-content-db'
import { MontagueCastanella } from '../contact/montague-castanella'

export const LostAndFoundMontagueCastanella: MissionData = {
  key: 'lost-and-found-montague-castanella',
  name: 'Lost and Found (Montague Castanella)',
  type: 'story-arc',
  morality: 'heroic',
  contactKeys: MontagueCastanella.key,
  levelRange: [10],
  links: [
    { title: 'Lost and Found', href: 'https://homecoming.wiki/wiki/Montague_Castanella#Lost_and_Found_(10-50)' },
  ],
  flashback: {
    id: '12.01',
    levelRange: [50],
  },
}
