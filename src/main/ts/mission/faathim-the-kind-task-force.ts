import { MissionData } from 'coh-content-db'
import { FaathimTheKind } from '../contact/faathim-the-kind'

export const FaathimTheKindTaskForce: MissionData = {
  key: 'faathim-the-kind-task-force',
  name: 'Faathim the Kind Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: FaathimTheKind.key,
  levelRange: [44],
  links: [
    { title: 'Faathim the Kind Task Force', href: 'https://homecoming.wiki/wiki/Faathim_the_Kind_Task_Force' },
  ],
}
