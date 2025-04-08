import { MissionData } from 'coh-content-db'
import { DrKahn } from '../contact/dr-khan'

export const DrKahnTaskForce: MissionData = {
  key: 'dr-khan-task-force',
  name: 'Dr. Kahn Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: DrKahn.key,
  levelRange: [45, 50],
  links: [{ title: 'Dr. Kahn Task Force', href: 'https://homecoming.wiki/wiki/Dr._Kahn_Task_Force' }],
}
