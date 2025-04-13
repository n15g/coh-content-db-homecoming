import { MissionData } from 'coh-content-db'
import { MsLiberty } from '../contact/ms-liberty'

export const MsLibertyTaskForce: MissionData = {
  key: 'ms-liberty-task-force',
  name: 'Ms. Liberty Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: MsLiberty.key,
  levelRange: [45],
  links: [
    { title: 'Ms. Liberty Task Force', href: 'https://homecoming.wiki/wiki/Ms._Liberty_Task_Force' },
  ],
}
