import { MissionData } from 'coh-content-db'
import { Numina } from '../contact/numina'

export const NuminaTaskForce: MissionData = {
  key: 'numina-task-force',
  name: 'Numina Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: Numina.key,
  levelRange: [35, 40],
  links: [
    { title: 'Numina Task Force', href: 'https://homecoming.wiki/wiki/Numina_Task_Force' },
  ],
}
