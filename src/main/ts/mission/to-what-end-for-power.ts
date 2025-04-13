import { MissionData } from 'coh-content-db'
import { PraetorDuncan } from '../contact/praetor-duncan'

export const ToWhatEndForPower: MissionData = {
  key: 'to-what-end-for-power',
  name: 'To What End for Power',
  type: 'story-arc',
  morality: 'primal',
  contactKeys: PraetorDuncan.key,
  levelRange: [30],
  links: [
    { title: 'To What End for Power', href: 'https://homecoming.wiki/wiki/Praetor_Duncan#To_What_End_for_Power' },
  ],
  flashback: {
    id: '22.16',
    levelRange: [50],
  },
}
