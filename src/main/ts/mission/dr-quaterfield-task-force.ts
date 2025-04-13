import { MissionData } from 'coh-content-db'
import { DrQuaterfield } from '../contact/dr-quaterfield'

export const DrQuaterfieldTaskForce: MissionData = {
  key: 'dr-quaterfield-task-force',
  name: 'Dr. Quaterfield Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: DrQuaterfield.key,
  levelRange: [40, 45],
  links: [
    { title: 'Dr. Quaterfield Task Force', href: 'https://homecoming.wiki/wiki/Dr._Quaterfield_Task_Force' },
  ],
}
