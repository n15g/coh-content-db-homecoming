import { MissionData } from 'coh-content-db'
import { Moonfire } from '../contact/moonfire'

export const MoonfireTaskForce: MissionData = {
  key: 'moonfire-task-force',
  name: 'Moonfire Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: Moonfire.key,
  levelRange: [23, 28],
  links: [
    { title: 'Moonfire Task Force', href: 'https://homecoming.wiki/wiki/Moonfire_Task_Force' },
  ],
}
