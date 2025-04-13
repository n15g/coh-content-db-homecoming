import { MissionData } from 'coh-content-db'
import { SisterPsyche } from '../contact/sister-psyche'

export const SisterPsycheTaskForce: MissionData = {
  key: 'sister-psyche-task-force',
  name: 'Sister Psyche Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: SisterPsyche.key,
  levelRange: [20, 25],
  links: [
    { title: 'Sister Psyche Task Force', href: 'https://homecoming.wiki/wiki/Sister_Psyche_Task_Force' },
  ],
}
