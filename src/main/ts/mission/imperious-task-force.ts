import { MissionData } from 'coh-content-db'
import { Imperious } from '../contact/imperious'

export const ImperiousTaskForce: MissionData = {
  key: 'imperious-task-force',
  name: 'Imperious Task Force',
  type: 'task-force',
  morality: 'primal',
  contactKeys: Imperious.key,
  levelRange: [35],
  links: [
    { title: 'Imperious Task Force', href: 'https://homecoming.wiki/wiki/Imperious_Task_Force' },
  ],
}
