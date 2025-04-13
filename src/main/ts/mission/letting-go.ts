import { MissionData } from 'coh-content-db'
import { Transmuter } from '../contact/transmuter'

export const LettingGo: MissionData = {
  key: 'letting-go',
  name: 'Letting Go',
  type: 'story-arc',
  morality: 'loyalist',
  contactKeys: Transmuter.key,
  levelRange: [8, 15],
  links: [
    { title: 'Letting Go', href: 'https://homecoming.wiki/wiki/Transmuter#Letting_Go' },
  ],
  flashback: {
    id: '18.23',
    levelRange: [15, 19],
    morality: 'all',
  },
}
