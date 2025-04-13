import { MissionData } from 'coh-content-db'
import { JessicaFlores } from '../contact/jessica-flores'

export const TheTruthHurts: MissionData = {
  key: 'the-truth-hurts',
  name: 'The Truth Hurts',
  type: 'story-arc',
  morality: 'resistance',
  contactKeys: JessicaFlores.key,
  levelRange: [8, 15],
  links: [
    { title: 'The Truth Hurts', href: 'https://homecoming.wiki/wiki/Jessica_Flores#The_Truth_Hurts' },
  ],
  flashback: {
    id: '18.32',
    levelRange: [15, 19],
    morality: 'all',
  },
}
