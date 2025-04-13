import { MissionData } from 'coh-content-db'
import { MortimerKal } from '../contact/mortimer-kal'

export const MortimerKalStrikeForce: MissionData = {
  key: 'mortimer-kal-strike-force',
  name: 'Mortimer Kal Strike Force',
  type: 'strike-force',
  morality: 'villainous',
  contactKeys: MortimerKal.key,
  levelRange: [20, 40],
  links: [
    { title: 'Mortimer Kal Strike Force', href: 'https://homecoming.wiki/wiki/Mortimer_Kal_Strike_Force' },
  ],
}
