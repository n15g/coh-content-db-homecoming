import { MissionData } from 'coh-content-db'
import { SaraMoore } from '../contact/sara-moore'

export const SaraMooreTaskForce: MissionData = {
  key: 'sara-moore-task-force',
  name: 'Sara Moore Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: SaraMoore.key,
  levelRange: [40],
  links: [
    { title: 'Sara Moore Task Force', href: 'https://homecoming.wiki/wiki/Sara_Moore_Task_Force' },
  ],
}
