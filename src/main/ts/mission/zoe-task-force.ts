import { MissionData } from 'coh-content-db'
import { ZoeLangston } from '../contact/zoe-langston'

export const ZoeTaskForce: MissionData = {
  key: 'zoe-task-force',
  name: 'Zoe Task Force',
  type: 'task-force',
  morality: 'any',
  contactKeys: ZoeLangston.key,
  levelRange: [40],
  links: [
    { title: 'Zoe Task Force', href: 'https://homecoming.wiki/wiki/Zoe_Task_Force' },
  ],
}