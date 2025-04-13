import { MissionData } from 'coh-content-db'
import { Apex } from '../contact/apex'

export const ApexTaskForce: MissionData = {
  key: 'apex-task-force',
  name: 'Apex Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: Apex.key,
  levelRange: [50],
  links: [
    { title: 'Apex Task Force', href: 'https://homecoming.wiki/wiki/Apex_Task_Force' },
  ],
}
