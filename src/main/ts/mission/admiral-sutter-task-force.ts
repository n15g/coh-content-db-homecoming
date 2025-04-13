import { MissionData } from 'coh-content-db'
import { AdmiralSutter } from '../contact/admiral-sutter'

export const AdmiralSutterTaskForce: MissionData = {
  key: 'admiral-sutter-task-force',
  name: 'Admiral Sutter Task Force',
  type: 'task-force',
  morality: 'heroic',
  contactKeys: AdmiralSutter.key,
  levelRange: [20, 40],
  links: [
    { title: 'Admiral Sutter Task Force', href: 'https://homecoming.wiki/wiki/Admiral_Sutter_Task_Force' },
  ],
}
