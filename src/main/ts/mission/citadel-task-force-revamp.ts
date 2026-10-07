import { MissionData } from 'coh-content-db'
import { Citadel } from '../contact/citadel'

export const CitadelTaskForceRevamp: MissionData = {
  key: 'citadel-task-force-revamp',
  name: 'Citadel Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: Citadel.key,
  levelRange: [25, 30],
  links: [
    { title: 'Citadel Task Force', href: 'https://homecoming.wiki/wiki/Citadel_Task_Force' },
  ],
}
