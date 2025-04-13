import { MissionData } from 'coh-content-db'
import { Manticore } from '../contact/manticore'

export const ManticoreTaskForce: MissionData = {
  key: 'manticore-task-force',
  name: 'Manticore Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: Manticore.key,
  levelRange: [30, 35],
  links: [
    { title: 'Manticore Task Force', href: 'https://homecoming.wiki/wiki/Manticore_Task_Force' },
  ],
}
